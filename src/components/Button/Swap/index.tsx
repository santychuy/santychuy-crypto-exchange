import { FC } from 'react';

import { container } from './styles.css';

interface SwapButtonProps {
  className?: string;
  onClick?: () => void;
}

const SwapButton: FC<SwapButtonProps> = ({ className, onClick }) => (
  <button
    type="button"
    className={`${container} ${className}`}
    onClick={onClick}
  >
    <img src="/icons/swap.svg" alt="Swap Icon" />
  </button>
);

export default SwapButton;
