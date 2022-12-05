import React from 'react';
import { Member } from '../../types';

export type MemberContextType = {
  members: Member[];
  loading: boolean;
  error: boolean;
  setMembers: (members: Member[]) => void;
  refetch: () => Promise<void>;
};

const RolesContext = React.createContext({} as MemberContextType);

export default RolesContext;
