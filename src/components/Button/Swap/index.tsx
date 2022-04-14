import { FC } from 'react';

import { useDispatch } from '@/hooks/useRedux';
import { swapToken } from '@/store/slices/tokens';

import { container } from './styles.css';

interface SwapButtonProps {
  className?: string;
}

const SwapButton: FC<SwapButtonProps> = ({ className }) => {
  const dispatch = useDispatch();

  const handleButton = () => dispatch(swapToken());

  return (
    <button
      type="button"
      className={`${container} ${className}`}
      onClick={handleButton}
    >
      <img src="/icons/swap.svg" alt="Swap Icon" />
    </button>
  );
};

export default SwapButton;
