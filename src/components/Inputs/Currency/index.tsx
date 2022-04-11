import type { FC } from 'react';

import CurrencyButton from '@/components/Button/Currency';

import { container, currencyButton, input, balanceLabel } from './styles.css';

interface InputCurrencyProps {
  token: 'eth' | 'schy';
}

const InputCurrency: FC<InputCurrencyProps> = ({ token }) => (
  <div className={container}>
    <CurrencyButton token={token} className={currencyButton} />
    <input
      className={input}
      type="text"
      name="currency"
      id="currency"
      placeholder="0.00"
    />
    <p className={balanceLabel}>Have: 0.00</p>
  </div>
);

export default InputCurrency;
