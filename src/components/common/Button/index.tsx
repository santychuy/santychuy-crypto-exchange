import type { FC } from 'react';

import { container } from './styles.css';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ disabled, onClick, label, className }) => (
  <button
    type="button"
    className={`${container} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
