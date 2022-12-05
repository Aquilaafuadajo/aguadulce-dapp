import * as React from 'react';
import { getRoles } from '../../services';
import RolesContext from './context';

const RolesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [roles, setRoles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

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
        setError(true);
        console.log(err);
        // alert('Unable to fetch roles at the moment');
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
