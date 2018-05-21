declare module 'cnab-file' {
    export = cnabFile;
}

declare namespace cnabFile {
    interface IEntry {
        start: number;
        end: number;
        value: string;
    }
    type Line = IEntry[];
    interface IRemittance {
        lineSize: number;
        eol: string;
        eof: string;
        lines: Line[];
    }
    type RemittanceFile = string;
    function generate(remittance: IRemittance): RemittanceFile;
}
