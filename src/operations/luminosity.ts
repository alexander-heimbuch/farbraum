import { ColorTranslator } from 'colortranslator';

export function luminosity({R, G, B}: ColorTranslator): number {
    const lum = (el: number): number => {
        const chan = el / 255;
        return (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }

    return 0.2126 * lum(R) + 0.7152 * lum(G) + 0.0722 * lum(B);
}