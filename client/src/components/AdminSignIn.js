// Libraries
import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
// Components
import { ContentWrapper } from './ContentWrapper';
import Button from './Button';
// Contexts
import { CurrentUserContext } from './CurrentUserContext';
// Configs
import { auth } from '../firebase';

const AdminSignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
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
    <ContentWrapper>
      <h1>Admin Sign In</h1>
      <TextContainer>
        <hr className="horizontale-rule" />
        <h3 style={{ padding: '20px 0 20px' }}>Add your credentials:</h3>
        <div>
          <form className="form-inline" onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              placeholder="Enter email"
              variant="outlined"
              type="email"
              id="email"
              label="email address"
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
            <Button
              style={{ padding: '10px 20px' }}
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
          </form>
        </div>
      </TextContainer>
    </ContentWrapper>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default AdminSignIn;
