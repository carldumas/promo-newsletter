// Libraries
import React from 'react';
import styled from 'styled-components';
// Styles
import { Wrapper } from './Styles';

const Home = () => {
  return (
    <>
      <Wrapper>
        <h1>Promotions Newsletter</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>
            Select a promotion newsletter from the list to receive best deal.
          </p>
          <p>List to come...</p>
        </TextContainer>
      </Wrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Home;
