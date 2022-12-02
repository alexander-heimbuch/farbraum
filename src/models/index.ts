import { ColorTranslator } from 'colortranslator';
import { Model } from "../types";
import hex from "./hex";
import names from "./names";
import rgb from "./rgb";
import rgba from "./rgba";

const models = [hex, names, rgb, rgba];

export const findModel = (input: string): Model | null =>
  models.find((model) => model.match(input)) || null;

export function transform(
  input: string
): null | { model: Model; value: ColorTranslator } {
  const color = input.replace(/\s/g, "");
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
    model,
  };
}
