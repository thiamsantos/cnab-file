import {generate} from '../src/index';

describe('generate', () => {
    it('should generate an remmitt', () => {
        const input = {
            lineSize: 10,
            eol: '\n',
            eof: '\n\n',
            lines: [
                [
                    {
                        start: 1,
                        end: 2,
                        value: '1'
                    },
                    {
                        start: 5,
                        end: 7,
                        value: 'SOMETHING'
                    }
                ],
                [
                    {
                        start: 3,
                        end: 5,
                        value: 'P'
                    },
                    {
                        start: 8,
                        end: 10,
                        value: 'SOMETHING'
                    }
                ]
            ]
        };

        const actual = generate(input);
        const expected = '1   SOM   \n  P    SOM\n\n';

        expect(actual).toBe(expected);
    });
});
