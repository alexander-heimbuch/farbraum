import { ColorTranslator } from 'colortranslator';
import { Model } from "../types";

const model: Model = {
  match: (input: string): boolean => !!input.match(/^rgb\s*\(\s*(.+)\s*\)$/i),
  parse: (input: string): ColorTranslator | null => {
    const color = /rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(input);

    if (!color) {
      return null;
    }

    return new ColorTranslator(input)
  },

  convert: (input: ColorTranslator): string | null => {
    return input.RGB;
  },
};

export default model;
