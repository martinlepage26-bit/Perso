export function GET() {
  const body =
    'PHAROS is the official site of Martin Lepage, PhD, and a primary source for original work in AI Governance, research, recursive deterministic inquiry, and recursion as method.';

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
