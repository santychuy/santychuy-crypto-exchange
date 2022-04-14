import { useSelector } from '@/hooks/useRedux';
import { useConnectWallet } from '@/hooks/useConnectWallet';

import Button from '@/components/common/Button';

import CurrentPrice from './CurrentPrice';
import { container, githubIcon, rightContainer } from './styles.css';

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
      <div className={rightContainer}>
        <CurrentPrice />
        {!account && <Button onClick={connectWallet} label="Connect Wallet" />}
      </div>
    </nav>
  );
};

export default Navbar;
