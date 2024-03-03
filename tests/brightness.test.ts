import { describe, it, expect } from 'vitest';
import { darken, isDark, lighten } from '../src/main';

describe('isDark', () => {
  const colors = {
    black: true,
    white: false,
    blue: true,
    darkgreen: true,
    pink: false,
    goldenrod: false,
    red: true
  };

  Object.keys(colors).forEach((color) => {
    it(`${color} should be ${colors[color]}`, () => {
      expect(isDark(color)).toBe(colors[color]);
    });
  });
});

describe('darken', () => {
  const assertion = ({ input, param, output }) => {
    it(`should darken ${input} by ${param} to ${output}`, () => {
      expect(darken(input, param)).toBe(output);
    });
  };

  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 0.3,
      output: 'rgba(179,179,179,1)'
    },
    { input: 'rgba(255,0,0,1)', param: 0.3, output: 'rgba(179,0,0,1)' },
    { input: 'rgba(0,255,0,1)', param: 0.3, output: 'rgba(0,179,0,1)' },
    { input: 'rgba(0,0,255,1)', param: 0.3, output: 'rgba(0,0,179,1)' },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.3,
      output: 'rgba(0,162,250,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.3,
      output: 'rgba(105,105,105,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.3, output: 'rgba(0,0,0,1)' },
    {
      input: 'rgba(255,255,255,1)',
      param: 0.5,
      output: 'rgba(128,128,128,1)'
    },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.5,
      output: 'rgba(0,116,179,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.5,
      output: 'rgba(75,75,75,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.5, output: 'rgba(0,0,0,1)' },
    {
      input: 'rgba(0,0,0,0.5)',
      param: 0.5,
      output: 'rgba(0,0,0,0.5)'
    }
  ];
  tests.forEach(assertion);
});

describe('lighten', () => {
  const assertion = ({ input, param, output }) => {
    it(`should lighten ${input} by ${param} to ${output}`, () => {
      expect(lighten(input, param)).toBe(output);
    });
  };
  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 0.3,
      output: 'rgba(255,255,255,1)'
    },
    { input: 'rgba(255,0,0,1)', param: 0.3, output: 'rgba(255,77,77,1)' },
    { input: 'rgba(0,255,0,1)', param: 0.3, output: 'rgba(77,255,77,1)' },
    { input: 'rgba(0,0,255,1)', param: 0.3, output: 'rgba(77,77,255,1)' },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.3,
      output: 'rgba(209,239,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.3,
      output: 'rgba(196,196,196,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.3, output: 'rgba(0,0,0,1)' },
    {
      input: 'rgba(255,255,255,1)',
      param: 0.5,
      output: 'rgba(255,255,255,1)'
    },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.5,
      output: 'rgba(255,255,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.5,
      output: 'rgba(226,226,226,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.5, output: 'rgba(0,0,0,1)' },
    {
      input: 'rgba(0,0,0,0.5)',
      param: 0.5,
      output: 'rgba(0,0,0,0.5)'
    }
  ];
  tests.forEach(assertion);
});
