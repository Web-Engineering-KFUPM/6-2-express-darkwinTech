export function getRandomInt(max) {
    const n = Math.floor(Number(max));
  if (!Number.isFinite(n) || n <= 0) return 0;
    return Math.floor(Math.random() * n);
}