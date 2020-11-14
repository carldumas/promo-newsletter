// Libraries
import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
// Contexts
import { CurrentUserContext } from './CurrentUserContext.js';
// Components
import app from '../firebase.js';
// Styles
import { Wrapper } from './Styles';
import './AdminSignIn.css';

const AdminSignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/admin');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(CurrentUserContext);
  if (currentUser) {
    return <Redirect to="/admin" />;
  }
  return (
    <Wrapper>
      <h1>Admin Sign In</h1>
      <TextContainer>
        <hr className="horizontale-rule" />
        <p style={{ paddingTop: '20px' }}>Add your credentials:</p>
        <div />
        <div>
          <form className="form-inline" onSubmit={handleLogin} noValidate>
            <label>Email:</label>
            <input
              placeholder="Enter email"
              variant="outlined"
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              required
            />
            <label>Password:</label>
            <input
              placeholder="Enter password"
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
            />
            <button type="submit" variant="contained">
              Sign In
            </button>
          </form>
        </div>
      </TextContainer>
    </Wrapper>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default AdminSignIn;
