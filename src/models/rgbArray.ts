import { ColorTranslator } from 'colortranslator';
import { ColorInput, Model } from '../types';

const model: Model = {
  match: (input: ColorInput): boolean =>
    typeof input !== 'string' && input.length === 3 && input.every((x) => typeof x === 'number'),
  parse: (input: ColorInput): ColorTranslator | null => {
    if (!input || typeof input === 'string') {
      return null;
    }

    const [r, g, b] = input;

    return new ColorTranslator({ r, g, b });
  },

  convert: (input: ColorTranslator): ColorInput | null => {
    return [input.R, input.G, input.B];
  }
};

export default model;
