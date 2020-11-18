// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import { ContentWrapper } from './ContentWrapper';
import Button from './Button';
// Icon
import { SiMinutemailer } from 'react-icons/si';

const Home = () => {
  return (
    <>
      <ContentWrapper>
        <h1>Promotions Newsletter</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <h3 style={{ padding: '20px 0 20px' }}>
            Select a promotion from the list to receive related newsletter.
          </h3>
          <PromoSection>
            <PromoBox>
              <SiMinutemailer style={{ width: '25px', height: '25px' }} />
              <h3>Amazing promo 1</h3>
              <Paragrapgh>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente accusantium non tempore quisquam odit amet magnam ex
                consequuntur.
              </Paragrapgh>
              <Link to="/register?promo=1">
                <Button style={{ padding: '20px', width: '90%' }}>
                  Subscribe
                </Button>
              </Link>
            </PromoBox>
            <PromoBox>
              <SiMinutemailer style={{ width: '25px', height: '25px' }} />
              <h3>Amazing promo 2</h3>
              <Paragrapgh>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente accusantium non tempore quisquam odit amet magnam ex
                consequuntur.
              </Paragrapgh>
              <Link to="/register?promo=2">
                <Button style={{ padding: '20px', width: '90%' }}>
                  Subscribe
                </Button>
              </Link>
            </PromoBox>
            <PromoBox>
              <SiMinutemailer style={{ width: '25px', height: '25px' }} />
              <h3>Amazing promo 3</h3>
              <Paragrapgh>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente accusantium non tempore quisquam odit amet magnam ex
                consequuntur.
              </Paragrapgh>
              <Link to="/register?promo=3">
                <Button style={{ padding: '20px', width: '90%' }}>
                  Subscribe
                </Button>
              </Link>
            </PromoBox>
          </PromoSection>
        </TextContainer>
      </ContentWrapper>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PromoSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const PromoBox = styled.div`
  box-sizing: content-box;
  height: 100%;
  width: 300px;
  padding: 30px;
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 1px #ddd;
  text-align: center;
  color: #3a3633;
`;

const Paragrapgh = styled.p`
  padding: 6px 0 20px;
`;

export default Home;
