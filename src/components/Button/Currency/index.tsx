import type { FC } from 'react';

import { container } from './styles.css';

interface CurrencyButtonProps {
  className?: string;
  token: 'eth' | 'schy';
}

const CurrencyButton: FC<CurrencyButtonProps> = ({ className, token }) => (
  <button type="button" className={`${container} ${className}`}>
    <img src={`/icons/${token}.svg`} alt="ETH Icon" />
    <p>{token.toUpperCase()}</p>
  </button>
);

export default CurrencyButton;
