import { ColorTranslator } from 'colortranslator';
import { ColorInput, Model } from '../types';

const model: Model = {
  match: (input: ColorInput): boolean =>
    typeof input === 'string' && !!input.match(/^rgb\s*\(\s*(.+)\s*\)$/i),
  parse: (input: ColorInput): ColorTranslator | null => {
    if (!input || typeof input !== 'string') {
      return null;
    }
    const color = /rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(input);

    if (!color) {
      return null;
    }

    return new ColorTranslator(input);
  },

  convert: (input: ColorTranslator): ColorInput | null => {
    return input.RGB;
  }
};

export default model;
