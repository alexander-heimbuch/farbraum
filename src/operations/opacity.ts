import { ColorTranslator } from 'colortranslator';

export function fade(input: ColorTranslator, ratio: number): ColorTranslator {
  const A = input.A - input.A * ratio;

  return input.setA(A < 1 ? A : 1);
}

export function opaquer(input: ColorTranslator, ratio: number): ColorTranslator {
  const A = input.A + input.A * ratio;

  return input.setA(A < 1 ? A : 1);
}
