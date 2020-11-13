// Libraries
import React from 'react';
import styled from 'styled-components';
// Styles
import { Wrapper } from './Styles';

const AdminDashboard = () => {
  return (
    <>
      <Wrapper>
        <h1>Admin Content</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>Some admin content...</p>
        </TextContainer>
      </Wrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default AdminDashboard;
