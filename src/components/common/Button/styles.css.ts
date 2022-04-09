import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  padding: `${vars.space[2]} ${vars.space[5]}`,
  borderRadius: vars.space[4],
  background:
    'linear-gradient(90deg, rgba(46,191,145,1) 0%, rgba(61,148,219,1) 80%, rgba(66,134,244,1) 100%)',
  color: vars.color.text.dark,
});
