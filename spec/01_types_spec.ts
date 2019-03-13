
describe('types', () => {
    describe('declaring of variables', () => {

        it('using the let keyword', () => {

            let name: string | number = "Tim";

            expect(name).toBe("Tim");

        });

        it('using const', () => {

            const PI = 3.14;

            const favoriteNumbers = [1, 2, 3, 4, 5, 6];

            favoriteNumbers[3] = 8;

            expect(favoriteNumbers[3]).toBe(8);

            const movie = {
                title: "Star Wars IV",
                director: "George Lucas",
                yearReleased: 1978
            }

            movie.yearReleased = 1977;

            expect(movie.title).toBe("Star Wars IV");
            expect(movie.director).toBe("George Lucas");
            expect(movie.yearReleased).toBe(1977);
        });

        it('numeric literals', () => {
            let x: number;
            x = 12;
            x = 3.0;
            x = 3_000_000;
            x = 0xff;
            x = 0b10101;
            x = 0o744;

        });

        it('has booleans', () => {
            let x: boolean;
            x = true;
            x = false;

            expect("").toBeFalsy();
            expect(-1).toBeTruthy();

        });

        describe('string literals', () => {
            it('does not care if you use single or double quotes', () => {

                const f1 = "Bob";
                const f2 = 'Bob';
                expect(f1).toBe(f2);

                const f3 = "His name is Bob O'Connor";
                const fb = 'His name is Bob O\'Connor';
                const f4 = 'She said "Is it lunch time yet?"';
                const f4b = "She said \"Is it lunch time yet?\"";

            });

            it('has template string', () => {

                const f1 = "Bob";
                const f2 = `Bob`;
                expect(f1).toBe(f2);

                const f3 = `Multi-
                line`;

                const title = 'Walden', author = ' Thoreau';
                const info = `That book is called ${title} by ${author}`;
                console.log(info);
            });
        });

        describe('arrays', () => {
            it('has them', () => {
                const things = [];
                things[0] = 'Morning!';
                things[1] = 99;
                things[999] = things;
                // expect(things[999][0]).toBe('Morning!');

                const numbers = [1, 12, 3];
                // numbers[18] = 'Tacos';

                const friends: string[] = [];

                friends[0] = 'David';
                friends[1] = 'Reggie';

                const stuff: Array<number | string> = [5, 6, 'yogurt'];
                // const stuff: (string | number)[] = [5, 6, 'yogurt'];

                const lotteryNumbers: Array<number> = [];



            });

            describe('arrays as tuples', () => {

                it('basic example', () => {

                    let d1: [boolean, string, string];
                    d1 = [false, 'tacos', 'beer'];

                    // type ThingyWithLetters = string;

                    // const name:ThingyWithLetters = 'Hello';

                    type Age = number;
                    type Person = [string, string, Age, string];

                    const warren: Person = ['Warren', 'Ellis', 55, 'Musician'];


                });
            });

            it('an example - oop style', () => {


                interface FormatNameResult {
                    fullName: string;
                    length: number;
                }
                // public string FormatName(first string, last string)
                function formatName(first: string, last: string): FormatNameResult {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullName: fullName,
                        length: fullName.length
                    }
                }

                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.length).toBe(9);


            });
            it('an example with a tuple', () => {

                type FormatNameResult = [string, number];

                function formatName(first: string, last: string): FormatNameResult {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const result = formatName('Han', 'Solo');

                // const name = result[0];

                // const len = result[1];
                const [name, len] = result;



                expect(name).toBe('Solo, Han');
                expect(len).toBe(9);


                const numbers = [1, 2, 3, 4, 5, 6, 7];

                const [first, ...others] = numbers;

                expect(first).toBe(1);
                expect(others).toEqual([2, 3, 4, 5, 6, 7]);

            });
        });

    });
});