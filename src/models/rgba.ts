import { ColorTranslator } from 'colortranslator';
import { Model } from "../types";

const model: Model = {
  match: (input: string): boolean => !!input.match(/^rgba\s*\(\s*(.+)\s*\)$/i),
  parse: (input: string): ColorTranslator | null => {
    if (!input) {
      return null;
    }

    return new ColorTranslator(input);
  },

  convert: (input: ColorTranslator): string | null => {
    return input.RGBA;
  },
};

export default model;
