import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { vars } from '../theme/index.css';

globalFontFace('Ubuntu', {
  src: 'local("Ubuntu")',
});

globalStyle('html, body', {
  fontFamily: 'Ubuntu',
  backgroundColor: vars.color.background.main,
  color: vars.color.text.dark,
});

globalStyle('h1, p', {
  margin: 0,
});

globalStyle('button', {
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

globalStyle('input', {
  border: 'none',
});
