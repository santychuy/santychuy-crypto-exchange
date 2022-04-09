import { useSelector } from '@/useRedux';
import MainLayout from '@/components/layouts/Main';

const App = () => {
  const account = useSelector((state) => state.account.account);

  return (
    <MainLayout>
      <h1>{account ? 'Connected!' : 'Try to connect your wallet'}</h1>
    </MainLayout>
  );
};

export default App;
