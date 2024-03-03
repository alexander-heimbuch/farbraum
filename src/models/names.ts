// @ts-ignore
import colors from 'color-name';
import { ColorTranslator } from 'colortranslator';
import { ColorInput, Model } from '../types';

const model: Model = {
  match: (input: ColorInput): boolean =>
    typeof input === 'string' && Object.keys(colors).includes(input),
  parse: (input: ColorInput): ColorTranslator | null => {
    if (!input || typeof input !== 'string') {
      return null;
    }

    return new ColorTranslator(input);
  },
  convert: (input: ColorTranslator): ColorInput | null => {
    return input.RGBA;
  }
};

export default model;
