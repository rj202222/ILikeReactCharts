export function getRandomNumberInRange(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export const num = () => getRandomNumberInRange(5, 120);
