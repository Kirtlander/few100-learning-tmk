
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