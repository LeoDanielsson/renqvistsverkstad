import Layout from '../components/layout';
import styled from 'styled-components';
import { white, gold, darkGreen, copper, linen } from '../colors';
import Container from '../components/container';
import Link from 'next/link';
import { large, medium } from '../breakpoints';
import CtaLink from '../components/ctaLink';

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

const YoutubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  width: 100%;
`;

const YouTube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Home = () => (
  <Layout title='Hem'>
    <Hero>
      <HeroContent>
        <h1>Skulptörens verkstad</h1>
        <p>Ett museum för skulptörens alla hantverk</p>
        <p>
          <strong>Aktuell gårdsuställning</strong> med Bo Andersson, Lotta
          Enocsson, Mats Eriksson, Annika Heed, Dina Hviid, Torsten Renqvist,
          Yemesi Wilson och Bitte Jonason Åkerlund.
        </p>
        <p>
          <CtaLink inverted href='/utstallningar/gardsutstallning'>
            Läs mer om utställningen
          </CtaLink>
        </p>
        <YoutubeWrapper>
          <YouTube
            src='https://www.youtube.com/embed/6DcVjanD6Jk'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            modestbranding
            rel='0'
            autoplay='1'
          />
        </YoutubeWrapper>
      </HeroContent>
    </Hero>
    <PageContent></PageContent>
  </Layout>
);

export default Home;
