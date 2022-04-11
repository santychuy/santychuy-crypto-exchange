import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: {
      main: '#1E262E',
      light: '#303D4A',
    },
    outline: '#354555',
    text: {
      light: '#000000',
      dark: '#FFFFFF',
      gray: '#5B5B5B',
    },
  },
  space: {
    none: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
  },
});
