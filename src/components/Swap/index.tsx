import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useSelector, useDispatch } from '@/hooks/useRedux';
import { swapToken } from '@/store/slices/tokens';

import SwapButton from '../Button/Swap';
import Button from '../common/Button';
import InputCurrency from '../Inputs/Currency';

import ResultSwap from './ResultSwap';
import { container, button, swapButton } from './styles.css';

const Swap = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account.account);
  const tokenUp = useSelector((state) => state.tokens.tokenUp);
  const tokenDown = useSelector((state) => state.tokens.tokenDown);

  const { connectWallet } = useConnectWallet();

  const handleButton = async () => {
    if (!account) {
      await connectWallet();
    }

    if (tokenUp.value) {
      console.log('Ready to Swap!');
    }
  };

  return (
    <div className={container}>
      <InputCurrency />
      <SwapButton
        className={swapButton}
        onClick={() => {
          dispatch(swapToken());
        }}
      />
      <ResultSwap />

      <Button
        label={
          account
            ? `Swap${tokenUp.value ? ` to ${tokenDown.symbol}` : ''}`
            : 'Connect Wallet'
        }
        className={!account || tokenUp.value ? button.primary : button.disabled}
        onClick={handleButton}
        disabled={!!account && !tokenUp.value}
      />
    </div>
  );
};

export default Swap;
