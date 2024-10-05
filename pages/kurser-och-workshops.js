import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Section from "../components/Section";

import content from "../content/pages/kurser-och-workshops.md";

const Program = () => {
  return (
    <Layout title="Kurser och workshops">
      <Container>
        <h1>{content.attributes.title}</h1>
        {content.attributes.sections.map((section, index) => (
          <Section key={index} title={section.title} image={section.image}>
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </Section>
        ))}
      </Container>
    </Layout>
  );
};

export default Program;
