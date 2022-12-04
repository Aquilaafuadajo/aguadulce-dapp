import React from 'react';

export type RolesContextType = {
  roles: string[];
  loading: boolean;
  error: boolean;
  setRoles: (roles: string[]) => void;
};

const RolesContext = React.createContext({} as RolesContextType);

export default RolesContext;
