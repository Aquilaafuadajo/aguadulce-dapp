import React from 'react';
import { ErrorType } from '../../types';

export type RolesContextType = {
  roles: string[];
  loading: boolean;
  error: ErrorType;
  setRoles: (roles: string[]) => void;
};

const RolesContext = React.createContext({} as RolesContextType);

export default RolesContext;
