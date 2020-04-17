import React from 'react';
import Firebase from './firebase';
import FirebaseContext from './useFirebase';

const FirebaseProvider = (props) => {
  const firebase = new Firebase();

  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
