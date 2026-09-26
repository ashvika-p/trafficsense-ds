// Deterministically spreads N points inside a stylized map canvas (0-100 space)
// using a golden-angle spiral, so every city's zones get a readable, non-overlapping
// layout without hand-authoring x/y coordinates for each of them.
export function computeZoneLayout(count: number): { x: number; y: number }[] {
  const golden = 137.508 * (Math.PI / 180);
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < count; i++) {
    const angle = i * golden;
    const radius = 10 + (i / Math.max(1, count - 1)) * 26;
    const cx = 50 + radius * Math.cos(angle) * 1.05;
    const cy = 50 + radius * Math.sin(angle) * 0.78;
    points.push({
      x: Math.min(86, Math.max(14, Number(cx.toFixed(1)))),
      y: Math.min(88, Math.max(14, Number(cy.toFixed(1)))),
    });
  }
  return points;
}
