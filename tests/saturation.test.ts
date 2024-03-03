import { describe, it, expect } from 'vitest';
import { desaturate, saturate } from '../src/main';

describe('saturate()', () => {
  const assertion = ({ input, output, param }) => {
    it(`should saturate ${input} by ${param} to ${output}`, () => {
      expect(saturate(input, param)).toBe(output);
    });
  };

  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 0.3,
      output: 'rgba(255,255,255,1)'
    },
    { input: 'rgba(255,0,0,1)', param: 0.3, output: 'rgba(255,0,0,1)' },
    { input: 'rgba(0,255,0,1)', param: 0.3, output: 'rgba(0,255,0,1)' },
    { input: 'rgba(0,0,255,1)', param: 0.3, output: 'rgba(0,0,255,1)' },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.3,
      output: 'rgba(102,201,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.3,
      output: 'rgba(150,150,150,1)'
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
      output: 'rgba(102,201,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.5,
      output: 'rgba(150,150,150,1)'
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

describe('desaturate()', () => {
  const assertion = ({ input, output, param }) => {
    it(`should desaturate ${input} by ${param} to ${output}`, () => {
      expect(desaturate(input, param)).toBe(output);
    });
  };

  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 0.3,
      output: 'rgba(255,255,255,1)'
    },
    { input: 'rgba(255,0,0,1)', param: 0.3, output: 'rgba(217,38,38,1)' },
    { input: 'rgba(0,255,0,1)', param: 0.3, output: 'rgba(38,217,38,1)' },
    { input: 'rgba(0,0,255,1)', param: 0.3, output: 'rgba(38,38,217,1)' },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.3,
      output: 'rgba(125,195,232,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.3,
      output: 'rgba(150,150,150,1)'
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
      output: 'rgba(140,190,217,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.5,
      output: 'rgba(150,150,150,1)'
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
