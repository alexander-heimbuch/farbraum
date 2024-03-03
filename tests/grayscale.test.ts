import { describe, it, expect } from 'vitest';
import { grayscale } from '../src/main';

describe('grayscale()', () => {
  const assertion = ({ input, output }) => {
    it(`should grayscale ${input} to ${output}`, () => {
      expect(grayscale(input)).toBe(output);
    });
  };

  const tests = [
    { input: 'rgba(255,255,255,1)', output: 'rgba(255,255,255,1)' },
    { input: 'rgba(255,0,0,1)', output: 'rgba(77,77,77,1)' },
    { input: 'rgba(0,255,0,1)', output: 'rgba(150,150,150,1)' },
    { input: 'rgba(0,0,255,1)', output: 'rgba(28,28,28,1)' },
    { input: 'rgba(100,200,255,1)', output: 'rgba(176,176,176,1)' },
    { input: 'rgba(150,150,150,1)', output: 'rgba(150,150,150,1)' },
    { input: 'rgba(0,0,0,1)', output: 'rgba(0,0,0,1)' },
    { input: 'rgba(255,255,255,1)', output: 'rgba(255,255,255,1)' },
    { input: 'rgba(100,200,255,1)', output: 'rgba(176,176,176,1)' },
    { input: 'rgba(150,150,150,1)', output: 'rgba(150,150,150,1)' },
    { input: 'rgba(0,0,0,1)', output: 'rgba(0,0,0,1)' },
    { input: 'rgba(0,0,0,0.5)', output: 'rgba(0,0,0,0.5)' }
  ];

  tests.forEach(assertion);
});
