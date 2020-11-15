// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
// Components
import { ContentWrapper } from './ContentWrapper';

const NotFound = () => {
  const currentHrefLocation = window.location.href;
  if (currentHrefLocation !== 'http://localhost:3000/404') {
    const redirect = <Redirect to="/404" />;
    return redirect;
  }

  return (
    <>
      <ContentWrapper style={{ minHeight: '20em' }}>
        <h1>404 - Page not Found!</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ padding: '20px 0 14px' }}>
            We're sorry but we can't find the page you're looking for. Please
            check the URL or go back to the{' '}
            <CustomLink to="/">home page</CustomLink>.
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

const CustomLink = styled(Link)`
  text-decoration: none;
  border-bottom: dashed 1px;
  color: black;
  &:hover {
    border-bottom: solid 1px;
  }
`;

export default NotFound;
