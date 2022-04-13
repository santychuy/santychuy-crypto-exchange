import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'grid',
  alignItems: 'center',
  rowGap: vars.space[6],
  padding: vars.space[3],
  backgroundColor: vars.color.background.light,
  borderRadius: vars.space[3],
  boxShadow: '0px 5px 11px 0px rgba(20,20,20,0.25)',
  WebkitBoxShadow: '0px 5px 11px 0px rgba(20,20,20,0.25)',
  width: '320px',
});

export const swapButton = style({
  justifySelf: 'center',
});

const baseButton = style({
  height: '45px',
  borderRadius: vars.space[3],
  marginTop: vars.space[1],
});

export const button = styleVariants({
  primary: [baseButton],
  disabled: [
    baseButton,
    {
      background: 'none',
      backgroundColor: vars.color.background.gray,
      color: vars.color.text['light-gray'],
      cursor: 'auto',
    },
  ],
});
