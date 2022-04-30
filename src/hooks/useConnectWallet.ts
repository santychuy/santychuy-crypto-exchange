import { setAccount } from '@/store/slices/account';

import { useContracts } from './useContracts';
import { useDispatch } from './useRedux';

export const useConnectWallet = () => {
  const dispatch = useDispatch();
  const { getBalances } = useContracts();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];

        if (accounts) {
          dispatch(setAccount(accounts[0]));

          await getBalances(accounts[0]);
        }
      } catch (e) {
        const error = e as Error;
        console.error(error.message);
      }
    }
  };

  return { connectWallet };
};
