import React from 'react';
import RolesContext, { AppContextType } from './context';

const useApp = (): AppContextType => React.useContext(RolesContext);

export { useApp };
