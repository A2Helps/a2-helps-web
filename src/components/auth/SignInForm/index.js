import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { ADMIN } from '../../../util/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    marginTop: 12,
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    color: '#3D3B39',
    minHeight: '300px',
  },
}));

function SignInFormBase(props) {
  const [login, setLogin] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(false);
  useEffect(() => {
    setIsInvalid(login.password === '' || login.email === '');
  }, [login]);

  const classes = useStyles();

  const onSubmit = event => {
    const { email, password } = login;
    props.firebase
      .doLoginWithEmailAndPassword(email, password)
      .then(() => {
        setLogin({ ...INITIAL_STATE });
        props.history.push(ADMIN);
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

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInForm;
