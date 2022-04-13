import type { FC } from 'react';

import { container } from './styles.css';

interface CurrencyButtonProps {
  className?: string;
  token: string;
}

const CurrencyButton: FC<CurrencyButtonProps> = ({ className, token }) => (
  <button type="button" className={`${container} ${className}`}>
    <img src={`/icons/${token.toLowerCase()}.svg`} alt={`${token} Icon`} />
    <p>{token}</p>
  </button>
);

export default CurrencyButton;
