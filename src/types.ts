import { ColorTranslator } from 'colortranslator';

export type ColorInput = string | number[];

export interface Model {
  match: (input: ColorInput) => boolean;
  parse: (input: ColorInput) => ColorTranslator | null;
  convert: (input: ColorTranslator) => ColorInput | null;
}
