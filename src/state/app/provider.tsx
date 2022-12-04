import * as React from 'react';
import { Contract } from 'web3-eth-contract';
import { loadContract } from '../../services';
import AppContext from './context';

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [contract, setContract] = React.useState<Contract | null>(null);

  React.useEffect(() => {
    setLoading(true);
    const loadAsync = async () => {
      try {
        const memberRoleContract = await loadContract();
        if (memberRoleContract) {
          setContract(memberRoleContract);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    loadAsync();
  }, []);

  return (
    <AppContext.Provider value={{ loading, error, contract }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
