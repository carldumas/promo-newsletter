// Libraries
import React from 'react';
import styled from 'styled-components';
// Styles
import { Wrapper } from './Styles';
// Configs
import { auth } from '../firebase.js';

const AdminDashboard = () => {
  return (
    <>
      <Wrapper>
        <h1>Admin Content</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>
            Restricted content{' '}
            <button onClick={() => auth.signOut()}>LogOut</button>
          </p>
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
