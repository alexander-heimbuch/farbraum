import { describe, it, expect } from 'vitest';
import { rotate } from '../src/main';

describe('rotate()', () => {
  const assertion = ({ input, output, param }) => {
    it(`should rotate ${input} by ${param}to ${output}`, () => {
      expect(rotate(input, param)).toBe(output);
    });
  };

  const tests = [
    {
      input: 'rgba(255,255,255,1)',
      param: 30,
      output: 'rgba(255,255,255,1)'
    },
    { input: 'rgba(255,0,0,1)', param: 30, output: 'rgba(255,128,0,1)' },
    { input: 'rgba(0,255,0,1)', param: 30, output: 'rgba(0,255,128,1)' },
    { input: 'rgba(0,0,255,1)', param: 30, output: 'rgba(128,0,255,1)' },
    {
      input: 'rgba(100,200,255,1)',
      param: 30,
      output: 'rgba(102,125,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 30,
      output: 'rgba(150,150,150,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 30, output: 'rgba(0,0,0,1)' },
    {
      input: 'rgba(255,255,255,1)',
      param: 50,
      output: 'rgba(255,255,255,1)'
    },
    {
      input: 'rgba(100,200,255,1)',
      param: 50,
      output: 'rgba(130,102,255,1)'
    },
    {
      input: 'rgba(150,150,150,1)',
      param: 50,
      output: 'rgba(150,150,150,1)'
    },
    { input: 'rgba(0,0,0,1)', param: 50, output: 'rgba(0,0,0,1)' },
    { input: 'rgba(0,0,0,0.5)', param: 50, output: 'rgba(0,0,0,0.5)' }
  ];

  tests.forEach(assertion);
});
