import { ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';

import { setAccount } from '@/store/slices/account';
import SantychuyTokenABI from '@/abi/SantychuyToken.sol/SantychuyToken.json';
import { SantychuyToken } from '@/typesContracts';

import { useDispatch, useSelector } from './useRedux';
import { setTokenDown, setTokenUp } from '@/store/slices/tokens';

export const useConnectWallet = () => {
  const dispatch = useDispatch();

  const tokenUp = useSelector((state) => state.tokens.tokenUp);
  const tokenDown = useSelector((state) => state.tokens.tokenDown);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];

        if (accounts) {
          dispatch(setAccount(accounts[0]));

          const provider = new ethers.providers.Web3Provider(
            window.ethereum as any
          );

          const contract = new ethers.Contract(
            import.meta.env.VITE_SANTYCHUYTOKEN_CONTRACT_ADDRESS as string,
            SantychuyTokenABI.abi,
            provider
          ) as SantychuyToken;

          const balance = await contract.balanceOf(accounts[0]);

          const balanceEth = await provider.getBalance(accounts[0]);

          dispatch(
            setTokenUp({
              ...tokenUp,
              balance: Number(formatUnits(balanceEth, 18)),
            })
          );

          dispatch(
            setTokenDown({
              ...tokenDown,
              balance: Number(formatUnits(balance, 18)),
            })
          );
        }
      } catch (e) {
        const error = e as Error;
        console.error(error.message);
      }
    }
  };

  return { connectWallet };
};
