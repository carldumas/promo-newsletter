// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import { ContentWrapper } from './ContentWrapper';

const Home = () => {
  return (
    <>
      <ContentWrapper>
        <h1>Promotions Newsletter</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <h3 style={{ padding: '20px 0 20px' }}>
            Select a promotion from the list to receive newsletter.
          </h3>
          <p>List to come...</p>
        </TextContainer>
      </ContentWrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Home;
