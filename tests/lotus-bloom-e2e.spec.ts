import { expect, test, type Locator, type Page } from '@playwright/test';

const HOLD_MS = 650;
const questions = [
  'What feels heaviest right now?',
  'Where have your options narrowed?',
  'What are you carrying that other people may not see?',
  'What kind of support would change the shape of this moment?',
  'Where do you still feel some agency, even if it is small?',
  'What would a kinder next step look like?',
  'What do you want to carry upward with you?',
] as const;

function makeWords(count: number, prefix: string, start = 1) {
  return Array.from({ length: count }, (_, index) => `${prefix}${start + index}`).join(' ');
}

function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

async function openCurrentBloom(page: Page, root: Locator, expectedQuestion: string) {
  await page.locator('#lotus-open-bloom').click();
  await expect(root).toHaveAttribute('data-bloom-state', /opening|active|near-limit/);
  await expect(page.locator('#lotus-active-panel')).toBeVisible();
  await expect(page.locator('#lotus-question-text')).toHaveText(expectedQuestion);
  await expect(page.locator('#lotus-bloom-input')).toBeFocused();
}

async function holdToSubmit(page: Page, root: Locator) {
  const submit = page.locator('#lotus-submit');
  await submit.click();
  await expect(submit).toHaveAttribute('data-armed', 'true');

  const box = await submit.boundingBox();
  if (!box) {
    throw new Error('Lotus submit button was not measurable for hold-to-submit.');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(HOLD_MS + 120);
  await expect(root).toHaveAttribute('data-bloom-state', 'closing');
  await page.mouse.up();
}

async function submitActiveBloomAndWaitForPause(page: Page, root: Locator) {
  await holdToSubmit(page, root);
  await expect(page.locator('#lotus-bud-panel')).toBeVisible({ timeout: 6_000 });
  await expect(root).toHaveAttribute('data-bloom-state', 'bud');
}

test.describe('Lotus bloom flow', () => {
  test('drives the full non-branching bloom journey in the browser', async ({ page }) => {
    test.slow();

    await page.goto('/lotus/');
    await page.evaluate(() => {
      window.localStorage.clear();
    });
    await page.reload();

    const root = page.locator('[data-lotus-bloom-root]');
    const input = page.locator('#lotus-bloom-input');
    const wordStatus = page.locator('#lotus-word-status');

    await expect(root).toHaveAttribute('data-bloom-state', 'bud');
    await expect(page.locator('#lotus-bud-panel')).toBeVisible();
    await expect(page.locator('#lotus-question-text')).toBeHidden();
    await expect(page.locator('#lotus-open-bloom')).toBeVisible();

    await openCurrentBloom(page, root, questions[0]);

    const shortAnswer = 'Lotus starts with a small honest answer';
    await input.fill(shortAnswer);
    await expect(input).toHaveValue(shortAnswer);
    await expect(wordStatus).toHaveText('93 remaining');

    const nearLimitWords = `${shortAnswer} ${makeWords(73, 'near')}`;
    await input.fill(nearLimitWords);
    await expect(root).toHaveAttribute('data-bloom-state', 'near-limit');
    await expect(wordStatus).toHaveText('20 words remaining');

    const cappedAnswer = `${nearLimitWords} ${makeWords(20, 'cap')}`;
    await input.fill(cappedAnswer);
    const cappedValue = await input.inputValue();
    expect(countWords(cappedValue)).toBe(100);
    await expect(wordStatus).toHaveText('Full');

    await input.type(' overflow should not land here');
    await expect(input).toHaveValue(cappedValue);
    expect(countWords(await input.inputValue())).toBe(100);

    await holdToSubmit(page, root);
    await expect(page.locator('#lotus-bud-panel')).toBeVisible({ timeout: 6_000 });
    await expect(root).toHaveAttribute('data-bloom-state', 'bud');
    await expect(page.locator('#lotus-node-stack .lotus-node')).toHaveCount(1);
    await expect(page.locator('#lotus-bud-copy')).toContainText('settled into the stalk');
    await expect(page.locator('#lotus-open-bloom')).toHaveText('Open next bloom');

    const mainViewText = await page.locator('body').evaluate((node) => node.innerText);
    expect(mainViewText).not.toContain('near1 near2 near3');

    await page.locator('#lotus-nav-down').click();
    await expect(root).toHaveAttribute('data-mode', 'review');
    await expect(root).toHaveAttribute('data-bloom-state', 'review');
    await expect(page.locator('#lotus-question-text')).toHaveText(questions[0]);
    await expect(input).toHaveValue(cappedValue);
    await expect(page.locator('#lotus-progress-label')).toHaveText('Reviewing question 1 of 7');

    await page.locator('#lotus-return-current').click();
    await expect(root).toHaveAttribute('data-mode', 'forward');
    await expect(page.locator('#lotus-bud-panel')).toBeVisible();

    await openCurrentBloom(page, root, questions[1]);
    const secondDraft = 'The second bloom keeps its draft after reload';
    await input.fill(secondDraft);
    await expect(input).toHaveValue(secondDraft);

    await page.reload();
    await expect(root).toHaveAttribute('data-mode', 'forward');
    await expect(page.locator('#lotus-active-panel')).toBeVisible({ timeout: 6_000 });
    await expect(page.locator('#lotus-question-text')).toHaveText(questions[1]);
    await expect(page.locator('#lotus-progress-label')).toHaveText('Question 2 of 7');
    await expect(page.locator('#lotus-node-stack .lotus-node')).toHaveCount(1);
    await expect(input).toHaveValue(secondDraft);

    await submitActiveBloomAndWaitForPause(page, root);
    await expect(page.locator('#lotus-node-stack .lotus-node')).toHaveCount(2);

    const remainingAnswers = [
      'The third bloom continues upward',
      'The fourth bloom asks for support',
      'The fifth bloom keeps a little agency',
      'The sixth bloom allows a kinder next step',
      'The final bloom carries something forward',
    ];

    for (const [index, answer] of remainingAnswers.entries()) {
      await openCurrentBloom(page, root, questions[index + 2]);
      await input.fill(answer);

      if (index === remainingAnswers.length - 1) {
        await holdToSubmit(page, root);
        await expect(page.locator('#lotus-complete-panel')).toBeVisible({ timeout: 6_000 });
        await expect(root).toHaveAttribute('data-bloom-state', 'complete');
      } else {
        await submitActiveBloomAndWaitForPause(page, root);
      }
    }

    await expect(page.locator('#lotus-node-stack .lotus-node')).toHaveCount(questions.length);
    await expect(page.locator('#lotus-node-overflow')).toHaveText(
      `Full stalk visible: ${questions.length} closed blooms held below.`,
    );
    await expect(page.locator('#lotus-complete-panel')).toContainText('The stalk holds all that you carried upward.');
  });
});
