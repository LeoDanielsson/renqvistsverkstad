import Layout from '../components/layout';
import styled from 'styled-components';
import { white, gold, darkGreen, copper, linen } from '../colors';
import Container from '../components/container';
import Link from 'next/link';
import { large, medium } from '../breakpoints';
import CtaLink from '../components/ctaLink';
import YoutubeVideo from '../components/youtubeVideo';

const Hero = styled.div`
  height: 80vh;
  overflow: visible;
  position: relative;

  background-color: black;
  background-image: url('/images/gryta.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 20vw;
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

const HeroContent = styled(Container)`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5em;
    color: ${white};
  }

  p {
    text-align: center;
  }
  padding-top: 1rem;
  @media (min-width: ${large}) {
    padding-top: 2rem;
    margin: 0 8rem;
  }
`;

const PageContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Poster = styled.div`
  max-width: 600px;
`;

const Home = () => (
  <Layout title="Hem">
    <Hero>
      <HeroContent>
        <h1>Skulptörens verkstad</h1>
        <p>Ett museum för skulptörens alla hantverk</p>
        <Poster>
          <a href="/images/Ombord-2020.jpg" target="_blank">
            <img src="/images/Ombord-2020.jpg" />
          </a>
        </Poster>
      </HeroContent>
    </Hero>
    <PageContent></PageContent>
  </Layout>
);

export default Home;
