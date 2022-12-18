import React from 'react';
import { ErrorType, Member } from '../../types';

export type MemberContextType = {
  members: Member[];
  loading: boolean;
  error: ErrorType;
  setMembers: (members: Member[]) => void;
  refetch: () => Promise<void>;
};

const RolesContext = React.createContext({} as MemberContextType);

export default RolesContext;
