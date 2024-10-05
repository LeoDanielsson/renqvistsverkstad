import Layout from "../components/Layout";
import Container from "../components/Container";
import Section from "../components/Section";
import fs from "fs";
import ReactMarkdown from "react-markdown";

export async function getExhibition(filename) {
  const module = await import(`../content/exhibitions/${filename}`);
  return {
    slug: filename.replace(/\.md$/, ""),
    attributes: module.attributes,
    html: module.html,
  };
}

export async function getStaticProps({ params }) {
  const filenames = fs.readdirSync("content/exhibitions");
  const exhibitions = await Promise.all(filenames.map(getExhibition));

  return {
    props: {
      exhibitions,
    },
  };
}

const ExhibitionHistory = ({ exhibitions }) => (
  <Layout>
    <Container>
      <h1>Historik</h1>
      {exhibitions.slice(1).map(({ slug, attributes: { title, sections } }) => (
        <Section
          key={slug}
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

export default ExhibitionHistory;
