import type { FC, ReactNode } from 'react';

import Navbar from '@/layouts/components/Navbar';

import { mainContainer } from './styles.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Navbar />

    <main className={mainContainer}>{children}</main>
  </div>
);

export default MainLayout;
