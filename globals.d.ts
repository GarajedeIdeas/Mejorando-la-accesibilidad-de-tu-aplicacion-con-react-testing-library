declare class ColorContrastChecker {
  constructor();
  isValidSixDigitColorCode(hex: string): boolean;
  isValidThreeDigitColorCode(hex: string): boolean;
  isValidColorCode(hex: string): boolean;
  isValidRatio(ratio: number): boolean;
  convertColorToSixDigit(hex: string): string;
  hexToLuminance(color: string): number;
  check(colorA: string, colorB: string, fontSize: number, customRatio?: number): boolean;
  checkPairs(pairs: Array<{colorA: string, colorB: string}>, customRatio?: number): Array<boolean>;
  calculateLuminance(lRGB: number): number;
  isLevelAA(colorA: string, colorB: string, fontSize: number): boolean;
  isLevelAAA(colorA: string, colorB: string, fontSize: number): boolean;
  isLevelCustom(colorA: string, colorB: string, ratio: number): boolean;
  getRGBFromHex(color: string): {r: number, g: number, b: number};
  calculateSRGB(rgb: {r: number, g: number, b: number}): {r: number, g: number, b: number};
  calculateLRGB(rgb: {r: number, g: number, b: number}): {r: number, g: number, b: number};
  getContrastRatio(lumA: number, lumB: number): number;
  verifyContrastRatio(ratio: number): void;
  verifyCustomContrastRatio(inputRatio: number, checkRatio: number): void;
}

declare module "color-contrast-checker" {
  export = ColorContrastChecker;
}
