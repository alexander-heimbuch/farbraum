import * as operations from './operations';
import { colorOperation, colorOperationWithModifier, colorProperty } from './helper/input';

export const darken = colorOperationWithModifier(operations.darken);
export const desaturate = colorOperationWithModifier(operations.desaturate);
export const fade = colorOperationWithModifier(operations.fade);
export const lighten = colorOperationWithModifier(operations.lighten);
export const opaquer = colorOperationWithModifier(operations.opaquer);
export const rotate = colorOperationWithModifier(operations.rotate);
export const saturate = colorOperationWithModifier(operations.saturate);

export const grayscale = colorOperation(operations.grayscale);
export const negate = colorOperation(operations.negate);

export const isDark = colorProperty<boolean>(operations.isDark);
export const luminosity = colorProperty<number>(operations.luminosity);
