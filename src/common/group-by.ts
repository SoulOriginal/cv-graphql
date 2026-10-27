export function groupBy<K, T>(
  keys: readonly K[],
  items: T[],
  keyOf: (item: T) => K,
): T[][] {
  const map = new Map<K, T[]>(keys.map((key) => [key, []]));
  for (const item of items) {
    map.get(keyOf(item))?.push(item);
  }
  return keys.map((key) => map.get(key) ?? []);
}
