import React from 'react';
import MemberContext, { MemberContextType } from './context';

const useMembers = (): MemberContextType => React.useContext(MemberContext);

export { useMembers };
