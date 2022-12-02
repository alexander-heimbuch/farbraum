import { ColorTranslator } from 'colortranslator';
import { transform } from "../models";

export const colorOperationWithModifier = (operation: (input: ColorTranslator, modifier: number) => ColorTranslator) => (input: string, modifier: number): string | null => {
  const color = transform(input);

  if (!color) {
    return null
  }

  return color.model.convert(operation(color.value, modifier));
}

export const colorOperation = (operation: (input: ColorTranslator) => ColorTranslator) => (input: string): string | null => {
  const color = transform(input);

  if (!color) {
    return null
  }

  return color.model.convert(operation(color.value));
}

export const colorProperty = <T>(operation: (input: ColorTranslator) => T) => (input: string): T | null => {
  const color = transform(input);

  if (!color) {
    return null
  }

  return operation(color.value);
}