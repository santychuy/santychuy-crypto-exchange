import type { ChangeEvent } from 'react';

import CurrencyButton from '@/components/Button/Currency';
import { setTokenUp, setTokenDown } from '@/store/slices/tokens';
import { useDispatch, useSelector } from '@/hooks/useRedux';

import { container, currencyButton, input, balanceLabel } from './styles.css';
import inputClass from './index.module.css';

const InputCurrency = () => {
  const dispatch = useDispatch();
  const tokenInput = useSelector((state) => state.tokens.tokenUp);
  const tokenResult = useSelector((state) => state.tokens.tokenDown);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(
      setTokenUp({
        ...tokenInput,
        value: value ? Number(value) : undefined,
      })
    );

    dispatch(
      setTokenDown({
        ...tokenResult,
        value:
          value && tokenResult.symbol === 'SCHY'
            ? Number(value) * 200
            : Number(value) / 200,
      })
    );
  };

  return (
    <div className={container}>
      <CurrencyButton token={tokenInput.symbol} className={currencyButton} />
      <input
        className={`${input} ${inputClass}`}
        type="number"
        name="currency"
        id="currency"
        placeholder="0.00"
        value={tokenInput.value}
        onChange={handleChange}
      />
      <p className={balanceLabel}>Have: {tokenInput.balance ?? '0.00'}</p>
    </div>
  );
};

export default InputCurrency;
