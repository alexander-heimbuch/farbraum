import { ColorTranslator } from "colortranslator";

export function saturate(
  input: ColorTranslator,
  ratio: number
): ColorTranslator {
  return input.setS(input.S + input.S * ratio);
}

export function desaturate(
  input: ColorTranslator,
  ratio: number
): ColorTranslator {
  return input.setS(input.S - input.S * ratio);
}
