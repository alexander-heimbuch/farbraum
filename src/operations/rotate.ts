import { ColorTranslator } from 'colortranslator';

export function rotate(input: ColorTranslator, degrees: number) {
    let H = (input.H + degrees) % 360;
    H = H < 0 ? 360 + H : H;

    return input.setH(H)
}