import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const mainContainer = style({
  padding: `0 ${vars.space[9]}`,
  height: '88vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
