import React from 'react';
import { Contract } from 'web3-eth-contract';

export type AppContextType = {
  loading: boolean;
  error: boolean;
  contract: Contract | null;
};

const AppContext = React.createContext({} as AppContextType);

export default AppContext;
