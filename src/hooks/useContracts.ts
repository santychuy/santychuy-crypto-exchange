import { ethers } from 'ethers';
import toast from 'react-hot-toast';

import SantychuyTokenABI from '@/abi/SantychuyToken.sol/SantychuyToken.json';
import TokenSwapABI from '@/abi/TokenSwap.sol/TokenSwap.json';
import { SantychuyToken, TokenSwap } from '@/typesContracts';

import { useDispatch, useSelector } from './useRedux';
import { setTokenDown, setTokenUp } from '@/store/slices/tokens';

export const useContracts = () => {
  const dispatch = useDispatch();

  const tokenUp = useSelector((state) => state.tokens.tokenUp);
  const tokenDown = useSelector((state) => state.tokens.tokenDown);

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);

  const signer = provider.getSigner();

  const tokenSwapContract = new ethers.Contract(
    import.meta.env.VITE_TOKENSWAP_CONTRACT_ADDRESS as string,
    TokenSwapABI.abi,
    signer
  ) as TokenSwap;

  const santychuyTokenContract = new ethers.Contract(
    import.meta.env.VITE_SANTYCHUYTOKEN_CONTRACT_ADDRESS as string,
    SantychuyTokenABI.abi,
    signer
  ) as SantychuyToken;

  const getBalances = async (account: string) => {
    const balance = await santychuyTokenContract.balanceOf(account);

    const balanceEth = await provider.getBalance(account);

    dispatch(
      setTokenUp({
        ...tokenUp,
        balance: Number(
          ethers.utils.formatUnits(
            tokenUp.symbol === 'ETH' ? balanceEth : balance
          )
        ),
      })
    );

    dispatch(
      setTokenDown({
        ...tokenDown,
        balance: Number(
          ethers.utils.formatUnits(
            tokenDown.symbol === 'ETH' ? balanceEth : balance
          )
        ),
      })
    );
  };

  const buyTokens = async (account: string) => {
    const transation = await tokenSwapContract.buyTokens({
      value: ethers.utils.parseEther(String(tokenUp.value)),
    });

    toast
      .promise(
        transation.wait(),
        {
          loading: 'Corriendo transacción...',
          error: 'Hubo un error al realizar la transacción, intente de nuevo',
          success: 'Se realizó correctamente la transacción 🚀',
        },
        {
          position: 'top-center',
        }
      )
      .then(async () => {
        await getBalances(account);
      });
  };

  const sellTokens = async (account: string) => {
    await santychuyTokenContract.approve(
      import.meta.env.VITE_TOKENSWAP_CONTRACT_ADDRESS as string,
      ethers.utils.parseUnits(String(tokenUp.value))
    );

    const transaction = await tokenSwapContract.sellTokens(
      ethers.utils.parseUnits(String(tokenUp.value))
    );

    toast
      .promise(
        transaction.wait(),
        {
          loading: 'Corriendo transacción...',
          error: 'Hubo un error al realizar la transacción, intente de nuevo',
          success: 'Se realizó correctamente la venta 🚀',
        },
        {
          position: 'top-center',
        }
      )
      .then(async () => {
        await getBalances(account);
      });
  };

  return { getBalances, buyTokens, sellTokens };
};
