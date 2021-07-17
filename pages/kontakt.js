import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { large } from '../breakpoints';
import content from '../content/pages/contact.md';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 32px;
  @media (min-width: ${large}) {
    grid-template-columns: 2fr 3fr;
  }
`;

const Contact = () => (
  <Layout title="Kontakt">
    <Container>
      <h1>{content.attributes.title}</h1>
      <Grid>
        <div>
          <ReactMarkdown>{content.attributes.text}</ReactMarkdown>
        </div>
        <a
          href="https://www.google.com/maps/place/Renqvists+verkstad/@59.3354556,18.2432392,12.08z/data=!4m5!3m4!1s0x465f83d5bb10d64f:0xddc8c3fb4df625aa!8m2!3d59.348078!4d18.2756484"
          target="_blank"
        >
          <img src={content.attributes.map} />
        </a>
      </Grid>
    </Container>
  </Layout>
);

export default Contact;
