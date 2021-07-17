import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Section from '../components/Section';

import content from '../content/pages/program.md';

const Program = () => {
  return (
    <Layout title="Program">
      <Container>
        <h1>{content.attributes.title}</h1>
        {content.attributes.sections.map((section) => (
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

export default Program;
