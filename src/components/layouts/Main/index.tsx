import type { FC } from 'react';

import Navbar from '@/layouts/components/Navbar';

import { mainContainer } from './styles.css';

const MainLayout: FC = ({ children }) => (
  <div>
    <Navbar />

    <main className={mainContainer}>{children}</main>
  </div>
);

export default MainLayout;
