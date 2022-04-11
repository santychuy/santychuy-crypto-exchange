import { FC } from 'react';

import { container } from './styles.css';

interface SwapButtonProps {
  className?: string;
}

const SwapButton: FC<SwapButtonProps> = ({ className }) => (
  <button type="button" className={`${container} ${className}`}>
    <img src="/icons/swap.svg" alt="Swap Icon" />
  </button>
);

export default SwapButton;
