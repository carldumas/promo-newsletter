// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper } from './Styles';

const Contactus = () => {
  return (
    <>
      <Wrapper style={{ height: '20em' }}>
        <h1>Contact Us</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>
            Some fake address to be added... &nbsp;
            <CustomLink to="/">home page</CustomLink>.
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

const CustomLink = styled(Link)`
  text-decoration: none;
  border-bottom: dashed 1px;
  color: black;
  &:hover {
    border-bottom: solid 1px;
  }
`;

export default Contactus;
