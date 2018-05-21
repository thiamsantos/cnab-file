export interface IEntry {
    start: number;
    end: number;
    value: string;
}

export type Line = IEntry[];

export interface IRemittance {
    lineSize: number;
    eol: string;
    eof: string;
    lines: Line[];
}

export type RemittanceFile = string;

function buildLine(lineSize: number): (line: Line) => string {
    return (line: Line): string => {
        const initialValue: string[] = Array(lineSize).fill(' ');

        return line.reduce(replaceValues, initialValue).join('');
    };
}

function replaceValues(values: string[], item: IEntry): string[] {
    const chars: string[] = item.value
        .substr(0, item.end - item.start + 1)
        .split('');

    chars.forEach((char: string, index: number) => {
        values[item.start + index - 1] = char;
    });

    return values;
}

export function generate(remittance: IRemittance): RemittanceFile {
    return (
        remittance.lines
            .map(buildLine(remittance.lineSize))
            .join(remittance.eol) + remittance.eof
    );
}
