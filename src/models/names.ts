import colors from "color-name";
import { ColorTranslator } from "colortranslator";
import { Model } from "../types";

const model: Model = {
  match: (input: string): boolean => Object.keys(colors).includes(input),
  parse: (input: string): ColorTranslator | null => {
    return new ColorTranslator(input);
  },

  convert: (input: ColorTranslator): string | null => {
    return input.RGBA;
  },
};

export default model;
