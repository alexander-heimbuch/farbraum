import { ColorTranslator } from 'colortranslator';
import { ColorInput, Model } from '../types';
import hex from './hex';
import names from './names';
import rgb from './rgb';
import rgba from './rgba';
import rgbArray from './rgbArray';

const models = [hex, names, rgb, rgba, rgbArray];

export const findModel = (input: ColorInput): Model | null =>
  models.find((model) => model.match(input)) || null;

export function transform(input: ColorInput): null | { model: Model; value: ColorTranslator } {
  const color = typeof input === 'string' ? input.replace(/\s/g, '') : input;
  const model = findModel(color);

  if (!model) {
    return null;
  }

  const value = model.parse(color);

  if (!value) {
    return null;
  }

  return {
    value,
    model
  };
}
