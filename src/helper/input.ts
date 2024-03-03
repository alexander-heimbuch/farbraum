import { ColorTranslator } from 'colortranslator';
import { transform } from '../models';
import { ColorInput } from '../types';

export const colorOperationWithModifier =
  (operation: (input: ColorTranslator, modifier: number) => ColorTranslator) =>
  (input: ColorInput, modifier: number): ColorInput | null => {
    const color = transform(input);

    if (!color) {
      return null;
    }

    return color.model.convert(operation(color.value, modifier));
  };

export const colorOperation =
  (operation: (input: ColorTranslator) => ColorTranslator) =>
  (input: ColorInput): ColorInput | null => {
    const color = transform(input);

    if (!color) {
      return null;
    }

    return color.model.convert(operation(color.value));
  };

export const colorProperty =
  <T>(operation: (input: ColorTranslator) => T) =>
  (input: string): T | null => {
    const color = transform(input);

    if (!color) {
      return null;
    }

    return operation(color.value);
  };
