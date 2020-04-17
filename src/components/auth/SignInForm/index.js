import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../Firebase';
import { ADMIN } from '../../../util/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function SignInForm() {
  const [login, setLogin] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(false);
  useEffect(() => {
    setIsInvalid(login.password === '' || login.email === '');
  }, [login]);
  const firebase = useFirebase();
  const history = useHistory();

  const onSubmit = event => {
    const { email, password } = login;
    firebase
      .doLoginWithEmailAndPassword(email, password)
      .then(() => {
        setLogin({ ...INITIAL_STATE });
        history.push(ADMIN);
      })
      .catch(error => {
        setLogin({
          ...login,
          error
        });
      });
    event.preventDefault();
  };

  const onChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={login.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={login.password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
      {login.error && <p>{login.error.message}</p>}
    </form>
  );
}

export default SignInForm;
