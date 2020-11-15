// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import { ContentWrapper } from './ContentWrapper';

const Contactus = () => {
  return (
    <>
      <ContentWrapper style={{ minHeight: '20em' }}>
        <h1>Contact us</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <h3 style={{ padding: '20px 0 20px' }}>Contact our team</h3>
          <p style={{ lineHeight: '1.6' }}>
            <b>Carlito Dimitry</b>
            <br />
            6817 43 Av. <br />
            Montreal, QC. <br />
            H1T 2R9 <br />
            Tel.: (514) 376-8344
          </p>
        </TextContainer>
      </ContentWrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Contactus;
