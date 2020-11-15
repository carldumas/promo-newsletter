// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import { ContentWrapper } from './ContentWrapper';
// Configs
import { firestore } from '../firebase';

const RegistrationForm = () => {
  const [user, setUser] = useState({
    email: '',
    fullname: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection('users').add(user);
    setUser({
      email: '',
      fullname: '',
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <ContentWrapper aria-label="Mailing list">
      <h1>Subscribe</h1>
      <TextContainer>
        <hr className="horizontale-rule" />
        <h3 style={{ padding: '20px 0 20px' }}>
          Enter your full name and email address to register to our promotions
          newsletter.
        </h3>
        <div>
          <form className="form-inline" onSubmit={handleSubmit}>
            <label>Full name:</label>
            <input
              placeholder="Fulll name"
              variant="outlined"
              label="Full name"
              type="text"
              id="fullname"
              name="fullname"
              value={user.fullname}
              onChange={handleChange}
              autoFocus
              required
            />
            <label>Email:</label>
            <input
              placeholder="Enter email"
              variant="outlined"
              type="email"
              id="email"
              label="email address"
              name="email"
              value={user.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            <label>
              <input
                className="form-checkbox"
                style={{ padding: '420px !important', margin: '0' }}
                type="checkbox"
                name="agreement"
                value="check"
                id="agree"
                required
              />{' '}
              I have read and agree to the{' '}
              <CustomLink to="/terms-and-conditions" target="_blank">
                Terms and Conditions
              </CustomLink>{' '}
              and{' '}
              <CustomLink to="/privacy-policy" target="_blank">
                Privacy Policy
              </CustomLink>
            </label>
            <button type="submit" variant="contained">
              Subscribe
            </button>
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

const CustomLink = styled(Link)`
  text-decoration: none;
  border-bottom: dashed 1px;
  color: black;
  &:hover {
    border-bottom: solid 1px;
  }
`;

export default RegistrationForm;
