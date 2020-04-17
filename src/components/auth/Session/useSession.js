import React from 'react';

const SessionContext = React.createContext(null);

export const useSession = () => {
  const userSession = React.useContext(SessionContext);
  if (userSession === null) {
    throw new Error('useSession must be used within a UserSessionProvider component');
  }
  return userSession;
}

export default SessionContext;
