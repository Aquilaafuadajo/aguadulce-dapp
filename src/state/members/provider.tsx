import * as React from 'react';
import { getMembers } from '../../services';
import { ErrorType, Member } from '../../types';
import MembersContext from './context';

const MembersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<ErrorType>({
    status: false,
    message: '',
  });

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
        setError({
          status: true,
          message: `Unable To load members. Did you run out of gas? if No, please check that you selected a correct ${process.env.REACT_APP_NETWORK_NAME} network and reload the page`,
        });
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
      setError({
        status: true,
        message: `Unable To load members. Did you run out of gas? if No, please check that you selected a correct ${process.env.REACT_APP_NETWORK_NAME} network and reload the page`,
      });
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
