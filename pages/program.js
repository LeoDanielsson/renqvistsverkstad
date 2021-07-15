import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import Container from '../components/container';
import Section from '../components/section';

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
