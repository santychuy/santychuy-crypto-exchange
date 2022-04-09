import type { FC } from 'react';

import { container } from './styles.css';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ disabled, onClick, label }) => (
  <button
    type="button"
    className={container}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
