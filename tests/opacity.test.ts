import { describe, it, expect } from 'vitest';
import { fade, opaquer } from '../src/main';

describe('fade()', () => {
  const assertion = ({ input, output, param }) => {
    it(`should fade ${input} by ${param}to ${output}`, () => {
      expect(fade(input, param)).toBe(output);
    });
  };

  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 0.3,
      output: 'rgba(255,255,255,0.7)'
    },
    {
      input: 'rgba(255,0,0,1)',
      param: 0.3,
      output: 'rgba(255,0,0,0.7)'
    },
    {
      input: 'rgba(0,255,0,1)',
      param: 0.3,
      output: 'rgba(0,255,0,0.7)'
    },
    {
      input: 'rgba(0,0,255,1)',
      param: 0.3,
      output: 'rgba(0,0,255,0.7)'
    },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.3,
      output: 'rgba(100,200,255,0.7)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.3,
      output: 'rgba(150,150,150,0.7)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.3, output: 'rgba(0,0,0,0.7)' },
    {
      input: 'rgba(255,255,255,1)',
      param: 0.5,
      output: 'rgba(255,255,255,0.5)'
    },
    {
      input: 'rgba(100,200,255,1)',
      param: 0.5,
      output: 'rgba(100,200,255,0.5)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 0.5,
      output: 'rgba(150,150,150,0.5)'
    },
    { input: 'rgba(0,0,0,1)', param: 0.5, output: 'rgba(0,0,0,0.5)' },
    {
      input: 'rgba(0,0,0,0.5)',
      param: 0.5,
      output: 'rgba(0,0,0,0.25)'
    }
  ];

  tests.forEach(assertion);
});

describe('opaquer()', () => {
  const assertion = ({ input, output, param }) => {
    it(`should opaquer ${input} by ${param}to ${output}`, () => {
      expect(opaquer(input, param)).toBe(output);
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
      output: 'rgba(100,200,255,1)'
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
      output: 'rgba(100,200,255,1)'
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
      output: 'rgba(0,0,0,0.75)'
    }
  ];

  tests.forEach(assertion);
});
