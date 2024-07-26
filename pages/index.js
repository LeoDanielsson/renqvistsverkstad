import Layout from "../components/Layout";
import styled from "styled-components";
import { white } from "../colors";
import Container from "../components/Container";
import { large, medium } from "../breakpoints";
import CtaLink from "../components/CtaLink";
import Poster from "../components/Poster";
import content from "../content/pages/startpage.md";

const poster = content.attributes.poster;

const HeroContent = styled.div`
  text-align: center;
  position: ${poster ? "relative" : "absolute"};
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
    <div className="h-svh md:h-[80vh] overflow-hidden relative flex justify-center bg-[#000] bg-[url('/images/gryta.jpg')] lg:bg-hero-image md:bg-[size:60%] bg-no-repeat bg-center bg-cover">
      <HeroContent>
        <Container>
          <p>{content.attributes.preTitle}</p>
          <h1>{content.attributes.title}</h1>
          <p>{content.attributes.postTitle}</p>

          <CtaLink href="/program">Se vårt program</CtaLink>
        </Container>
      </HeroContent>
    </div>
    <PosterContainer>{poster && <Poster url={poster} />}</PosterContainer>
  </Layout>
);

export default Home;
