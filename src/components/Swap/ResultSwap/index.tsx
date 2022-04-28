import CurrencyButton from '@/components/Button/Currency';
import {
  container,
  balanceLabel,
  currencyButton,
} from '@/components/Inputs/Currency/styles.css';
import { useSelector } from '@/hooks/useRedux';

import { labelResult } from './styles.css';

const ResultSwap = () => {
  const tokenResult = useSelector((state) => state.tokens.tokenDown);

  return (
    <div className={container}>
      <CurrencyButton token={tokenResult.symbol} className={currencyButton} />
      <p className={tokenResult.value ? labelResult.main : labelResult.empty}>
        {tokenResult.value ?? '0.00'}
      </p>
      <p className={balanceLabel}>Have: {tokenResult.balance ?? '0.00'}</p>
    </div>
  );
};

export default ResultSwap;
