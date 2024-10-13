import Layout from "../components/Layout";
import Container from "../components/Container";
import Section from "../components/Section";
import YoutubeVideo from "../components/YoutubeVideo";
import styled from "styled-components";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import { getExhibition } from "./utstallningar";

const Video = styled.div`
  margin-bottom: 2rem;
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

const ExhibitionPage = ({
  activeExhibition: {
    attributes: { title, youtubeUrl, sections },
  },
}) => {
  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        {youtubeUrl && (
          <Video>
            <YoutubeVideo youtubeId={youtubeUrl} />
          </Video>
        )}
        {sections.map((section, index) => (
          <Section key={index} title={section.title} image={section.image}>
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </Section>
        ))}
      </Container>
    </Layout>
  );
};
export default ExhibitionPage;
