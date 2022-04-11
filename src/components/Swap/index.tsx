import SwapButton from '../Button/Swap';
import Button from '../common/Button';
import InputCurrency from '../Inputs/Currency';

import { container, button, swapButton } from './styles.css';

const Swap = () => (
  <div className={container}>
    <InputCurrency token="eth" />

    <SwapButton className={swapButton} />

    <InputCurrency token="schy" />

    <Button label="Connect Wallet" className={button} />
  </div>
);

export default Swap;
