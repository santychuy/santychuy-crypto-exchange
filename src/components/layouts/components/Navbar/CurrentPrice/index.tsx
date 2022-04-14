import { container, icon, label } from './styles.css';

const CurrentPrice = () => (
  <div className={container}>
    <img src="/icons/schy.svg" alt="SCHY Icon" className={icon} />

    <p className={label}> = $3.29</p>
  </div>
);

export default CurrentPrice;
