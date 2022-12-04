import * as React from 'react';
import { getMembers } from '../../services';
import { Member } from '../../types';
import MembersContext from './context';

const MembersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const loadAsync = async () => {
      try {
        if (members.length === 0) {
          setLoading(true);
          const allMembers = await getMembers();
          setMembers([...allMembers]);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
        // alert('Unable to fetch members at the moment');
      }
    };
    loadAsync();
  }, [members.length]);

  const refetch = async () => {
    try {
      const allMembers = await getMembers();
      setMembers([...allMembers]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MembersContext.Provider
      value={{
        members,
        setMembers: (roles: Member[]) => setMembers(roles),
        refetch,
        loading,
        error,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export default MembersProvider;
