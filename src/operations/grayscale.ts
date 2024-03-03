import { ColorTranslator } from 'colortranslator';

export function grayscale(input: ColorTranslator): ColorTranslator {
  // http://en.wikipedia.org/wiki/Grayscale#Converting_colour_to_grayscale
  const value = input.R * 0.3 + input.G * 0.59 + input.B * 0.11;
  return input.setR(value).setG(value).setB(value);
}
