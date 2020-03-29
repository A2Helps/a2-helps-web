import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doLogout}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);

