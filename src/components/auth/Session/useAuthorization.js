import React from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../../util/routes';
import { useFirebaseAuthChange } from '../Firebase/useFirebase';

const userExistsCondition = authUser => !!authUser;

export const useAuthRedirect = () => {
  const history = useHistory();

  const onAuthChange = React.useCallback((authUser) => {
    if (!userExistsCondition(authUser)) {
      history.push(LOGIN);
    }
  }, [history]);

  useFirebaseAuthChange(onAuthChange);
};
