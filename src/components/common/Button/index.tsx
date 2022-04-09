import type { FC } from 'react';

import { container } from './styles.css';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, disabled, onClick }) => (
  <button
    type="button"
    className={container}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
