import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  display: 'grid',
  backgroundColor: vars.color.background.main,
  borderRadius: vars.space[3],
  padding: `${vars.space[2]} ${vars.space[3]}`,
  gridTemplateColumns: '1fr 40%',
  rowGap: vars.space[2],
});

export const currencyButton = style({
  gridColumn: 'span 2',
  justifySelf: 'flex-end',
});

export const input = style({
  backgroundColor: vars.color.background.main,
  color: vars.color.text.dark,
  alignSelf: 'end',
  height: '30px',
  width: '100%',
  fontSize: '1.5rem',
  '::placeholder': {
    color: vars.color.text.gray,
  },
  ':focus': {
    outline: 'none',
  },
});

export const balanceLabel = style({
  fontSize: '0.95rem',
  color: vars.color.text.gray,
  alignSelf: 'end',
  paddingBottom: vars.space[2],
  justifySelf: 'flex-end',
});
