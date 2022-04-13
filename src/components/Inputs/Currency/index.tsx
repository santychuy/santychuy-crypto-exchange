import type { FC, ChangeEvent } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import CurrencyButton from '@/components/Button/Currency';
import { Token } from '@/store/slices/tokens';
import { useDispatch } from '@/hooks/useRedux';

import { container, currencyButton, input, balanceLabel } from './styles.css';
import inputClass from './index.module.css';

interface InputCurrencyProps {
  token: Token;
  onChange: ActionCreatorWithPayload<Token, string>;
  disabled?: boolean;
}

const InputCurrency: FC<InputCurrencyProps> = ({
  token,
  disabled,
  onChange,
}) => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      onChange({
        ...token,
        value: Number(e.target.value || undefined),
      })
    );
  };

  return (
    <div className={container}>
      <CurrencyButton token={token.symbol} className={currencyButton} />
      <input
        className={`${input} ${inputClass}`}
        type="number"
        name="currency"
        id="currency"
        placeholder="0.00"
        disabled={disabled}
        value={token.value}
        onChange={handleChange}
      />
      <p className={balanceLabel}>
        Have: {token.balance?.toFixed(2) ?? '0.00'}
      </p>
    </div>
  );
};

export default InputCurrency;
