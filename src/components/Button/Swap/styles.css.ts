import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  backgroundColor: vars.color.background.main,
  border: `2px solid ${vars.color.outline}`,
  borderRadius: '50%',
  width: '50px',
  height: '50px',
});
