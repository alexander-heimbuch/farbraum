import { ColorInput, Model } from '../types';
import { ColorTranslator } from 'colortranslator';

const model: Model = {
  match: (input: ColorInput): boolean => typeof input === 'string' && input.startsWith('#'),
  parse: (input: ColorInput): ColorTranslator | null => {
    if (!input || typeof input !== 'string') {
      return null;
    }

    return new ColorTranslator(input);
  },
  convert: (input: ColorTranslator): ColorInput | null => {
    if (input.A < 1) {
      return input.HEXA;
    }

    return input.HEX;
  }
};

export default model;
