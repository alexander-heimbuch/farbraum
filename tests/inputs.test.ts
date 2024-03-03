import { describe, it, expect } from 'vitest';
import { negate } from '../src/main';

describe('input models', () => {
  const inputs = [
    {
      type: 'hex',
      value: '#afafaf',
      expected: '#505050'
    },
    {
      type: 'hexa',
      value: '#afafafaf',
      expected: '#505050AF'
    },
    {
      type: 'name',
      value: 'red',
      expected: 'rgba(0,255,255,1)'
    },
    {
      type: 'rgb',
      value: 'rgb(240, 215, 128)',
      expected: 'rgb(15,40,127)'
    },
    {
      type: 'rgba',
      value: 'rgba(240, 215, 128, 0.5)',
      expected: 'rgba(15,40,127,0.5)'
    },
    {
      type: 'rgbArray',
      value: [240, 215, 128],
      expected: [15, 40, 127]
    }
  ];

  inputs.forEach((input) => {
    it(`should use ${input.type} as a color model`, () => {
      expect(negate(input.value)).toEqual(input.expected);
    });
  });
});
