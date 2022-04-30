import { style, keyframes } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #ED7347',
  padding: `6px ${vars.space[3]}`,
  borderRadius: vars.space[3],
  columnGap: vars.space[3],
});

const fadeInOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const point = style({
  width: '7px',
  height: '7px',
  backgroundColor: '#ED7347',
  borderRadius: '50%',
  animation: `${fadeInOut} 0.8s infinite alternate-reverse`,
});
