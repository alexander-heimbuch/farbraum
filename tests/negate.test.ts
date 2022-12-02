import { describe, it, expect } from "vitest";
import { negate } from "../src/main";

describe("negate()", () => {
  const assertion = ({ input, output }) => {
    it(`should negate ${input} to ${output}`, () => {
      expect(negate(input)).toBe(output);
    });
  };

  const tests = [
    { input: "rgba(255,255,255,1)", output: "rgba(0,0,0,1)" },
    { input: "rgba(255,0,0,1)", output: "rgba(0,255,255,1)" },
    { input: "rgba(0,255,0,1)", output: "rgba(255,0,255,1)" },
    { input: "rgba(0,0,255,1)", output: "rgba(255,255,0,1)" },
    { input: "rgba(100,200,255,1)", output: "rgba(155,55,0,1)" },
    { input: "rgba(150,150,150,1)", output: "rgba(105,105,105,1)" },
    { input: "rgba(0,0,0,1)", output: "rgba(255,255,255,1)" },
    { input: "rgba(255,255,255,1)", output: "rgba(0,0,0,1)" },
    { input: "rgba(100,200,255,1)", output: "rgba(155,55,0,1)" },
    { input: "rgba(150,150,150,1)", output: "rgba(105,105,105,1)" },
    { input: "rgba(0,0,0,1)", output: "rgba(255,255,255,1)" },
    { input: "rgba(0,0,0,0.5)", output: "rgba(255,255,255,0.5)" },
  ];

  tests.forEach(assertion);
});
