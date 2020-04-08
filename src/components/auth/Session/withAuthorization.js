import React, { useEffect } from 'react';
import AuthUserContext from './context';
import { LOGIN } from '../../../util/routes';

const withAuthorization = condition => Component => props => {
  useEffect(() => {
    const unsubscriber = props.firebase.auth.onAuthStateChanged(
      authUser => {
        if (!condition(authUser)) {
          props.history.push(LOGIN);
        }
      }
    );
    return () => unsubscriber();
  });

  return (
    <AuthUserContext.Consumer>
      {({ authUser }) =>
        condition(authUser) ? <Component {...props} /> : null
      }
    </AuthUserContext.Consumer>
  );
};

export default withAuthorization;
