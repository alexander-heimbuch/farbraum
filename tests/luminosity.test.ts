import { describe, it, expect } from "vitest";
import { luminosity } from "../src/main";

describe("luminosity()", () => {
  const assertion = ({ input, output }) => {
    it(`should luminosity ${input} to ${output}`, () => {
      expect(luminosity(input)).toBe(output);
    });
  };

  const tests = [
    { input: "rgba(255,255,255,1)", output: 1 },
    { input: "rgba(255,0,0,1)", output: 0.2126 },
    { input: "rgba(0,255,0,1)", output: 0.7152 },
    { input: "rgba(0,0,255,1)", output: 0.0722 },
    { input: "rgba(100,200,255,1)", output: 0.5123787818559048 },
    { input: "rgba(150,150,150,1)", output: 0.3049873140698862 },
    { input: "rgba(0,0,0,1)", output: 0 },
    { input: "rgba(255,255,255,1)", output: 1 },
    { input: "rgba(100,200,255,1)", output: 0.5123787818559048 },
    { input: "rgba(150,150,150,1)", output: 0.3049873140698862 },
    { input: "rgba(0,0,0,1)", output: 0 },
    { input: "rgba(0,0,0,0.5)", output: 0 },
  ];

  tests.forEach(assertion);
});
