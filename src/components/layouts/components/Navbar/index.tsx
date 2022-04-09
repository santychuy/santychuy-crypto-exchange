import { container, githubIcon } from './styles.css';

import { useDispatch, useSelector } from '@/useRedux';
import { setAccount } from '@/store/slices/account';
import Button from '@/components/common/Button';

const Navbar = () => {
  const dispath = useDispatch();
  const account = useSelector((state) => state.account.account);

  const handleGithub = () => {
    window.open(
      'https://github.com/santychuy/santychuy-crypto-exchange',
      '_blank'
    );
  };

  const handleConnectAccount = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];

        if (accounts) {
          dispath(setAccount(accounts[0]));
        }
      } catch (e) {
        const error = e as Error;
        console.error(error.message);
      }
    }
  };

  return (
    <nav className={container}>
      <img
        src="/icons/github.svg"
        alt="Github Icon"
        onClick={handleGithub}
        className={githubIcon}
      />
      {!account && (
        <Button onClick={handleConnectAccount}>Connect Wallet</Button>
      )}
    </nav>
  );
};

export default Navbar;
