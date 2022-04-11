import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '20px 1fr',
  columnGap: vars.space[2],
  padding: vars.space[2],
  color: vars.color.text.dark,
  backgroundColor: vars.color.background.light,
  borderRadius: vars.space[2],
  height: '32px',
  boxShadow: '0px 4px 9px 0px rgba(0,0,0,0.25)',
  WebkitBoxShadow: '0px 4px 9px 0px rgba(0,0,0,0.25)',
});
