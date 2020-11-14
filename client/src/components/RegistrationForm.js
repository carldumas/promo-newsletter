// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import Spacer from './Spacer';
// Styles
import { Wrapper } from './Styles';
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
    <Wrapper aria-label="Mailing list">
      <h1>Subscribe</h1>
      <TextContainer>
        <hr className="horizontale-rule" />
        <p style={{ paddingTop: '20px' }}>
          You're subscribing to a promotion mailing list.
        </p>

        <Form onSubmit={handleSubmit}>
          <h3 style={{ color: 'black' }}>Enter user information</h3>
          <Row>
            <TextInput
              placeholder="Fulll name"
              label="Full name"
              type="text"
              id="fullname"
              name="fullname"
              value={user.fullname}
              onChange={handleChange}
              className="validate"
              style={{ flex: 1 }}
              autoFocus
              required
            />

            <Spacer size={16} />
            <TextInput
              placeholder="Email"
              label="Email"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="validate"
              style={{ flex: 1 }}
              required
            />
          </Row>
          <Row>
            <input
              type="checkbox"
              name="checkbox"
              value="check"
              id="agree"
              required
            />{' '}
            <span style={{ color: 'black' }}>
              &nbsp; I have read and agree to the{' '}
              <CustomLink to="/terms-and-conditions" target="_blank">
                Terms and Conditions
              </CustomLink>{' '}
              and{' '}
              <CustomLink to="/privacy-policy" target="_blank">
                Privacy Policy
              </CustomLink>
              .
            </span>
          </Row>
          <Row>
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </Row>
        </Form>
      </TextContainer>
    </Wrapper>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TextInput = styled.input`
  width: 200px;
  height: 40px;
`;

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  padding: 24px 32px 32px;
  background: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  padding-top: 16px;
`;

const SubscribeButton = styled.button`
  width: 200px;
  background-color: rgba(1, 1, 1, 0.04);
  color: rgba(0, 0, 0, 0.87);
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin: auto;
  width: 50%;

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
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
