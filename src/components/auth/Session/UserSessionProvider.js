import React from 'react';
import { useFirebase, useFirebaseAuthChange } from '../Firebase';
import SessionContext from './useSession';

const UserSessionProvider = (props) => {
  const firebase = useFirebase();
  const user = firebase.auth.currentUser;
  const [state, setState] = React.useState({ isAuthenticated: !!user, user });

  const onAuthChange = React.useCallback((user) => {
    setState({ isAuthenticated: !!user, user });
  }, [setState]);

  useFirebaseAuthChange(onAuthChange);

  return (
    <SessionContext.Provider value={state}>
      {props.children}
    </SessionContext.Provider>
  );
};

export default UserSessionProvider;
