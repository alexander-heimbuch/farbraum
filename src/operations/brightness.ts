import { ColorTranslator } from 'colortranslator';

export function isDark({ R, G, B }: ColorTranslator): boolean {
  // YIQ equation from http://24ways.org/2010/calculating-color-contrast

  const yiq = (R * 2126 + G * 7152 + B * 722) / 10000;
  return yiq < 128;
}

export function darken(color: ColorTranslator, ratio: number): ColorTranslator {
  return color.setL(color.L - color.L * ratio);
}

export function lighten(color: ColorTranslator, ratio: number): ColorTranslator {
  return color.setL(color.L + color.L * ratio);
}
