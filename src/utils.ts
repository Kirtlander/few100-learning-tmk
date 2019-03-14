
export function add(x: number, y: number) {
    return x + y;
}

type Transformer = (x: string) => string;

export function formatName(
    first: string,
    last: string,
    transformer: Transformer = s => s): string {

    const fullName = `${last}, ${first}`;
    return transformer(fullName);
}

export const isEven = (n: number) => n % 2 === 0;

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 