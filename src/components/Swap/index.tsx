import { toast } from 'react-hot-toast';
import { ethers } from 'ethers';

import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useSelector } from '@/hooks/useRedux';
import TokenSwapABI from '@/abi/TokenSwap.sol/TokenSwap.json';
import { TokenSwap } from '@/typesContracts';

import SwapButton from '../Button/Swap';
import Button from '../common/Button';
import InputCurrency from '../Inputs/Currency';

import ResultSwap from './ResultSwap';
import { container, button, swapButton } from './styles.css';

const Swap = () => {
  const account = useSelector((state) => state.account.account);
  const tokenUp = useSelector((state) => state.tokens.tokenUp);
  const tokenDown = useSelector((state) => state.tokens.tokenDown);

  const { connectWallet } = useConnectWallet();

  const handleButton = async () => {
    if (!account) {
      await connectWallet();
    }

    if (tokenUp.value) {
      if (tokenUp.symbol === 'ETH') {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum as any
        );
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          import.meta.env.VITE_TOKENSWAP_CONTRACT_ADDRESS as string,
          TokenSwapABI.abi,
          signer
        ) as TokenSwap;

        const transation = await contract.buyTokens({
          value: ethers.utils.parseEther(String(tokenUp.value)),
        });

        await transation.wait();

        toast.success('Success 🚀');
      } else {
        toast.success('Ready to swap 🚀');
      }
    }
  };

  return (
    <div className={container}>
      <InputCurrency />
      <SwapButton className={swapButton} />
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
