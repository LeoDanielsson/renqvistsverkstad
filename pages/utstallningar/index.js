import Layout from '../../components/layout';
import Container from '../../components/container';
import Section from '../../components/section';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';

async function getExhibition(filename) {
  const module = await import(`../../content/exhibitions/${filename}`);
  return {
    slug: filename.replace(/\.md$/, ''),
    attributes: module.attributes,
    html: module.html,
  };
}

export async function getStaticProps({ params }) {
  const filenames = fs.readdirSync('content/exhibitions');
  const exhibitions = await Promise.all(filenames.map(getExhibition));

  return {
    props: {
      exhibitions,
    },
  };
}

const Exhibitions = ({ exhibitions }) => (
  <Layout>
    <Container>
      <h1>Utställningar</h1>
      {exhibitions.map(({ slug, attributes: { title, sections } }) => (
        <Section
          title={title}
          image={sections[0].image}
          link={`/utstallningar/${slug}`}
        >
          <ReactMarkdown>{sections[0].body}</ReactMarkdown>
        </Section>
      ))}
    </Container>
  </Layout>
);

export default Exhibitions;
