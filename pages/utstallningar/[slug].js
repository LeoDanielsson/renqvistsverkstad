import Layout from '../../components/layout';
import Container from '../../components/container';
import Section from '../../components/section';
import YoutubeVideo from '../../components/youtubeVideo';
import styled from 'styled-components';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';

const Video = styled.div`
  margin-bottom: 2rem;
`;

export async function getStaticProps({ params }) {
  const content = await import(`../../content/exhibitions/${params.slug}.md`);
  return {
    props: { content: { attributes: content.attributes, html: content.html } }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const exhibitions = fs.readdirSync('content/exhibitions');
  return {
    paths: exhibitions.map((filename) => ({
      params: {
        slug: filename.replace(/\.md$/, ''),
      },
    })),
    fallback: false,
  };
}

const Gardsutstallning = ({
  content: {
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
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            image={section.image}
          >
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </Section>
        ))}
      </Container>
    </Layout>
  );
};
export default Gardsutstallning;