import { container, githubIcon } from './styles.css';

import { useSelector } from '@/hooks/useRedux';
import { useConnectWallet } from '@/hooks/useConnectWallet';

import Button from '@/components/common/Button';

const Navbar = () => {
  const account = useSelector((state) => state.account.account);
  const { connectWallet } = useConnectWallet();

  const handleGithub = () => {
    window.open(
      'https://github.com/santychuy/santychuy-crypto-exchange',
      '_blank'
    );
  };

  return (
    <nav className={container}>
      <img
        src="/icons/github.svg"
        alt="Github Icon"
        onClick={handleGithub}
        className={githubIcon}
      />
      {!account && <Button onClick={connectWallet} label="Connect Wallet" />}
    </nav>
  );
};

export default Navbar;
