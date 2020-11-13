// Libraries
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <Paragragh>
          <Anchor href="/privacy-policy">Privacy Policy</Anchor>&nbsp;|&nbsp;
          <Anchor href="/terms-and-conditions">Terms & Conditions</Anchor>
          &nbsp;|&nbsp;
          <Anchor href="/contact-us">Contact Us</Anchor>
          &nbsp;|&nbsp;© 2020 Concordia Bootcamp
        </Paragragh>
      </FooterContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #575555;
  z-index: 10;
`;

const FooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90em;
`;

const Paragragh = styled.p`
  font-size: 12px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.5;
  }
`;

export default Footer;
