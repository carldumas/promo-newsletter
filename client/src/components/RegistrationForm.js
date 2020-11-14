// Libraries
import React from 'react';
import styled from 'styled-components';
// Styles
import { Wrapper } from './Styles';

const RegistrationForm = () => {
  return (
    <>
      <Wrapper>
        <h1>Register to our Newsletter</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>Some content...</p>
        </TextContainer>
      </Wrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default RegistrationForm;
