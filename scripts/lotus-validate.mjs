import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

async function runRouteContractChecks() {
  const lotusRoute = await readFile(path.join(repoRoot, 'src/pages/lotus/index.astro'), 'utf8');
  const lotusResearchRoute = await readFile(path.join(repoRoot, 'src/pages/lotus/research/index.astro'), 'utf8');
  const lotusBloomJourney = await readFile(path.join(repoRoot, 'src/components/lotus/LotusBloomJourney.astro'), 'utf8');
  const lotusLayout = await readFile(path.join(repoRoot, 'src/layouts/LotusLayout.astro'), 'utf8');
  const lotusStyles = await readFile(path.join(repoRoot, 'src/styles/lotus.css'), 'utf8');
  const lotusData = await readFile(path.join(repoRoot, 'src/data/lotus.ts'), 'utf8');

  assert.match(
    lotusRoute,
    /import\s+LotusBloomJourney\s+from\s+['"]\.\.\/\.\.\/components\/lotus\/LotusBloomJourney\.astro['"]/,
    'LOTUS route should include the bloom journey component.',
  );
  assert.match(
    lotusRoute,
    /<LotusBloomJourney\s*\/>/,
    'LOTUS route should render the bloom journey.',
  );
  assert.match(lotusRoute, /<LotusLayout/, 'LOTUS route should render inside the Lotus layout.');
  assert.match(lotusRoute, /canonical="\/lotus\/"/, 'LOTUS route should keep the primary canonical path.');
  assert.match(
    lotusRoute,
    /sequential bloom journaling experience: one question, one active writing surface, and one upward movement at a time\./,
    'LOTUS route should describe the bloom journey.',
  );

  assert.match(
    lotusResearchRoute,
    /import\s+LotusWorkbench\s+from\s+['"]\.\.\/\.\.\/\.\.\/components\/lotus\/LotusWorkbench\.astro['"]/,
    'LOTUS research route should include the browser workbench.',
  );
  assert.match(
    lotusResearchRoute,
    /import\s+LotusVectorWorkbench\s+from\s+['"]\.\.\/\.\.\/\.\.\/components\/lotus\/LotusVectorWorkbench\.astro['"]/,
    'LOTUS research route should include the vector workbench surface.',
  );
  assert.match(lotusResearchRoute, /id="lotus-workbench"/, 'LOTUS research route should expose the workbench anchor.');
  assert.match(lotusResearchRoute, /id="lotus-vector"/, 'LOTUS research route should expose the vector model anchor.');
  assert.match(
    lotusResearchRoute,
    /The analytical Lotus tools now live beside the bloom, not inside it\./,
    'LOTUS research route should explain the split.',
  );
  assert.match(
    lotusResearchRoute,
    /canonical="\/lotus\/research\/"/,
    'LOTUS research route should keep its own canonical path.',
  );

  assert.match(lotusLayout, /<span class="lotus-wordmark">Lotus<\/span>/, 'LOTUS layout should keep the Lotus wordmark.');
  assert.match(lotusStyles, /color-scheme:\s*light;/, 'LOTUS styles should keep the light Bloom color treatment.');
  assert.match(lotusStyles, /rgba\(246,\s*182,\s*212,\s*0\.4\)/, 'LOTUS styles should preserve the Bloom background palette.');
  assert.match(
    lotusData,
    /href:\s*'\/lotus\/research\/#lotus-vector'/,
    'LOTUS data links should point the research tool CTA to the research route.',
  );
  assert.match(
    lotusBloomJourney,
    /aria-labelledby="lotus-phase-label lotus-question-text"/,
    'LOTUS bloom input should be programmatically named by the active question.',
  );
  assert.match(
    lotusBloomJourney,
    /const WORD_LIMIT = 100;/,
    'LOTUS bloom flow should preserve the 100-word cap.',
  );
  assert.match(
    lotusBloomJourney,
    /countWords\(previousValue\) >= WORD_LIMIT && rawValue\.length > previousValue\.length/,
    'LOTUS bloom flow should block further character growth once the 100-word cap is reached.',
  );
  assert.match(
    lotusBloomJourney,
    /const HOLD_MS = 650;/,
    'LOTUS bloom flow should preserve the deliberate hold-to-submit timing.',
  );
  assert.match(
    lotusBloomJourney,
    /window\.localStorage\.setItem\(STORAGE_KEY, JSON\.stringify\(payload\)\)/,
    'LOTUS bloom flow should persist local draft/session state.',
  );
  assert.match(
    lotusBloomJourney,
    /showFullStalk = state\.completed \|\| state\.mode === 'review'/,
    'LOTUS should render the full stalk in completion and review contexts.',
  );
  assert.match(
    lotusBloomJourney,
    /window\.visualViewport/,
    'LOTUS should include keyboard-aware viewport handling for mobile focus.',
  );

  return {
    route: 'src/pages/lotus/index.astro',
    researchRoute: 'src/pages/lotus/research/index.astro',
    bloomJourney: 'src/components/lotus/LotusBloomJourney.astro',
    layout: 'src/layouts/LotusLayout.astro',
    styles: 'src/styles/lotus.css',
    bytes: Buffer.byteLength(lotusRoute, 'utf8'),
  };
}

async function main() {
  const contractSummary = await runRouteContractChecks();

  console.log('LOTUS validation passed.');
  console.log(JSON.stringify(contractSummary, null, 2));
}

main().catch((error) => {
  console.error(`LOTUS validation failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
