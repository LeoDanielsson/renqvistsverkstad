import Layout from '../components/layout';
import styled from 'styled-components';
import { white, gold, darkGreen, copper, linen } from '../colors';
import Container from '../components/container';
import Link from 'next/link';
import { large, medium } from '../breakpoints';
import CtaLink from '../components/ctaLink';

const Hero = styled.div`
  height: 80vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url('/images/gryta.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: ${large}) {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.1) 30%,
        rgba(0, 0, 0, 0.1) 70%,
        rgba(0, 0, 0, 1) 100%
      ),
      url('/images/gryta.jpg');
    background-size: 60%;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${white};
  font-size: 20px;

  h1 {
    margin-top: 1.666rem;
    font-size: 2.5em;
    color: ${white};
  }
  @media (min-width: ${medium}) {
    padding-top: 2rem;
  }
  @media (min-width: ${large}) {
    padding-top: 4rem;
  }
`;

const Home = () => (
  <Layout title='Hem'>
    <Hero>
      <HeroContent>
        <Container>
          <p>Föreningen Renqvists verkstad presenterar</p>
          <h1>Skulptörens verkstad</h1>
          <p>Ett museum för skulptörens alla hantverk</p>
          <CtaLink href='/program' inverted>
            Se vårt program
          </CtaLink>
        </Container>
      </HeroContent>
    </Hero>
  </Layout>
);

export default Home;
