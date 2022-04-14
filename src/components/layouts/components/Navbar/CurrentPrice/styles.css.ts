import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '20px 1fr',
  columnGap: vars.space[2],
  alignItems: 'center',
});

export const icon = style({
  width: '25px',
});

export const label = style({
  fontSize: '1.15rem',
});
