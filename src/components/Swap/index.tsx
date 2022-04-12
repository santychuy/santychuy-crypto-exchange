import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useSelector } from '@/hooks/useRedux';

import SwapButton from '../Button/Swap';
import Button from '../common/Button';
import InputCurrency from '../Inputs/Currency';

import { container, button, swapButton } from './styles.css';

const Swap = () => {
  const account = useSelector((state) => state.account.account);

  const { connectWallet } = useConnectWallet();

  const handleButton = async () => {
    if (!account) {
      await connectWallet();
    }
  };

  return (
    <div className={container}>
      <InputCurrency token="eth" />

      <SwapButton className={swapButton} />

      <InputCurrency token="schy" />

      <Button
        label={account ? 'Swap' : 'Connect Wallet'}
        className={account ? button.disabled : button.primary}
        onClick={handleButton}
      />
    </div>
  );
};

export default Swap;
