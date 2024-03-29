import Layout from '../components/Layout';
import styled from 'styled-components';
import { white } from '../colors';
import Container from '../components/Container';
import { large, medium } from '../breakpoints';
import CtaLink from '../components/CtaLink';
import Poster from '../components/Poster';
import content from '../content/pages/startpage.md';

const poster = content.attributes.poster;

const Hero = styled.div`
  height: ${poster ? 'auto' : '80vh'};
  overflow: ${poster ? 'visible' : 'hidden'};
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
  position: ${poster ? 'relative' : 'absolute'};
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
    padding: 2rem 0;
  }
  @media (min-width: ${large}) {
    padding: 4rem 0;
  }
`;

const PosterContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const Home = () => (
  <Layout title="Hem">
    <Hero>
      <HeroContent>
        <Container>
          <p>{content.attributes.preTitle}</p>
          <h1>{content.attributes.title}</h1>
          <p>{content.attributes.postTitle}</p>

          <CtaLink href="/program" inverted>
            Se vårt program
          </CtaLink>
        </Container>
      </HeroContent>
    </Hero>
    <PosterContainer>{poster && <Poster url={poster} />}</PosterContainer>
  </Layout>
);

export default Home;
