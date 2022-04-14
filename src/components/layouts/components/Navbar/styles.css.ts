import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/index.css';

export const container = style({
  height: '75px',
  padding: `${vars.space[2]} ${vars.space[6]}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #2E3D4B',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.space[2]} ${vars.space[20]}`,
    },
  },
});

export const githubIcon = style({
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '40px',
    },
  },
});

export const rightContainer = style({
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
});
