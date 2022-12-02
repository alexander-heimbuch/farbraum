import { Model } from "../types";
import { ColorTranslator } from "colortranslator";

const model: Model = {
  match: (input: string): boolean => input.startsWith("#"),
  parse: (input: string): ColorTranslator => {
    return new ColorTranslator(input);
  },
  convert: (input: ColorTranslator): string => {
    if (input.A < 1) {
      return input.HEXA;
    }

    return input.HEX;
  },
};

export default model;
