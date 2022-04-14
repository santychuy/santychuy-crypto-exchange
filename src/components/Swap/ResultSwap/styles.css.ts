import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

const labelBase = style({
  alignSelf: 'end',
  fontSize: '1.5rem',
});

export const labelResult = styleVariants({
  empty: [
    labelBase,
    {
      color: vars.color.text.gray,
    },
  ],
  main: [
    labelBase,
    {
      color: vars.color.text.dark,
    },
  ],
});
