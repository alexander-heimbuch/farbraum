import { ColorTranslator } from "colortranslator";

export function negate(input: ColorTranslator): ColorTranslator {
  return input
    .setR(255 - input.R)
    .setG(255 - input.G)
    .setB(255 - input.B);
}
