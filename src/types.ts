import { ColorTranslator } from 'colortranslator';

export interface Model {
    match: (input: string) => boolean;
    parse: (input: string) => ColorTranslator | null;
    convert: (input: ColorTranslator) => string | null;
}