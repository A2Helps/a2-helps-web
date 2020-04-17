import React from 'react';

const FirebaseContext = React.createContext(null);

export const useFirebase = () => {
  const firebase = React.useContext(FirebaseContext);
  if (firebase === null) {
    throw new Error('useFirebase must be used within a FirebaseProvider component');
  }
  return firebase;
}

export const useFirebaseAuthChange = (callback) => {
  const firebase = useFirebase();

  React.useEffect(() => {
    const unsubscriber = firebase.auth.onAuthStateChanged(callback);
    return () => unsubscriber();
  }, [firebase, callback]);

  return firebase;
};

export default FirebaseContext;
