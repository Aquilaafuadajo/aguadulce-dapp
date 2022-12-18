import * as React from 'react';
import { getRoles } from '../../services';
import { ErrorType } from '../../types';
import RolesContext from './context';

const RolesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [roles, setRoles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<ErrorType>({
    status: false,
    message: '',
  });

  React.useEffect(() => {
    const loadAsync = async () => {
      try {
        if (roles.length === 0) {
          setLoading(true);
          const allRoles = await getRoles();
          setRoles([...allRoles]);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError({
          status: true,
          message: `Unable To load roles. Did you run out of gas? if No, please check that you selected a correct ${process.env.REACT_APP_NETWORK_NAME} network and reload the page`,
        });
      }
    };
    loadAsync();
  }, [roles.length]);

  return (
    <RolesContext.Provider
      value={{
        roles,
        setRoles: (roles: string[]) => setRoles(roles),
        loading,
        error,
      }}
    >
      {children}
    </RolesContext.Provider>
  );
};

export default RolesProvider;
