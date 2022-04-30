import type { FC, ReactNode } from 'react';

import Navbar from '@/layouts/components/Navbar';
import Network from '@/components/Network';

import { mainContainer } from './styles.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Navbar />

    <main className={mainContainer}>
      {children}
      <Network />
    </main>
  </div>
);

export default MainLayout;
