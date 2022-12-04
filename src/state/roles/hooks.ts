import React from 'react';
import RolesContext, { RolesContextType } from './context';

const useRoles = (): RolesContextType => React.useContext(RolesContext);

export { useRoles };
