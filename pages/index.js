import Layout from "../components/Layout";
import styled from "styled-components";
import { white } from "../colors";
import Container from "../components/Container";
import { large, medium } from "../breakpoints";
import CtaLink from "../components/CtaLink";
import Poster from "../components/Poster";
import content from "../content/pages/startpage.md";
import fs from "fs";
import { getExhibition } from "./utstallningar";
import Section from "../components/Section";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const poster = content.attributes.poster;

const Hero = styled.div`
  min-height: 80vh;
  overflow: ${poster ? "visible" : "hidden"};
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url("/images/gryta.jpg");
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/images/gryta.jpg");
  background-size: 100vw;
  background-position: center -40vw;
  @media (min-width: ${large}) {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0.2) 70%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("/images/gryta.jpg");
    background-size: 30vw;
    background-position: center -10vw;
  }
`;

const HeroContent = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${white};
  font-size: 16px;

  h1 {
    color: ${white};
    font-size: 24px;
  }
  @media (min-width: ${medium}) {
    padding: 2rem 0;
    font-size: 18px;
    h1 {
      color: ${white};
      font-size: 24px;
    }
  }
  @media (min-width: ${large}) {
    margin-top: 1.666rem;
    padding: 4rem 0;
    h1 {
      color: ${white};
      font-size: 48px;
    }
  }
`;

const PosterContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export async function getStaticProps() {
  const filenames = fs.readdirSync("content/exhibitions");
  const exhibitions = await Promise.all(filenames.map(getExhibition));

  // Find the exhibition with the latest attributes.startDate
  exhibitions.sort((a, b) => {
    const dateA = new Date(a.attributes.date);
    const dateB = new Date(b.attributes.date);
    return dateB - dateA;
  });

  return { props: { activeExhibition: exhibitions[0] } };
}

const ActiveExhibition = ({ exhibition }) => {
  if (!exhibition) {
    return null;
  }

  const {
    slug,
    attributes: { title, sections },
  } = exhibition;
  const link = `/aktuell-utstallning`;
  return (
    <div className="p-4 bg-darkGreen text-left rounded-md mt-4 mb-2">
      <h2>Aktuell utställning</h2>
      <h3>
        <Link href={link}>{title}</Link>
      </h3>
      <ReactMarkdown>{sections[0].body}</ReactMarkdown>
      <CtaLink href={link}>Klicka för att läsa mer</CtaLink>
    </div>
  );
};

const Home = ({ activeExhibition }) => (
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
          <ActiveExhibition exhibition={activeExhibition} />
        </Container>
      </HeroContent>
    </Hero>
    <PosterContainer>{poster && <Poster url={poster} />}</PosterContainer>
  </Layout>
);

export default Home;
