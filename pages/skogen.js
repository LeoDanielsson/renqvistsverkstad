import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { large, medium } from '../breakpoints';
import GlobalStyle from '../components/GlobalStyle';

import content from '../content/pages/skogen.md';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  background-image: url('/images/mossigskog_desk.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${large}) {
    background-image: url('/images/mossigskog_xl.jpg');
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #eee;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 9vw;
  text-transform: uppercase;
  margin: 30vh 8px;
  text-shadow: 4px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  @media (min-width: ${medium}) {
    font-size: 60px;
  }
  @media (min-width: ${large}) {
    font-size: 80px;
  }
`;

const Card = styled.div`
  width: 100%;
  color: #255957;
  background-color: rgba(240, 240, 240, 0.95);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  padding: 32px;
  margin: 80px;
  h2 {
    color: #d1530f;
  }
  font-size: 1.1rem;
  img {
    width: 400px;
    max-width: 80%;
    float: right;
    margin: 2rem !important;
  }
`;

const Ingress = styled.p`
  font-size: 1.3rem;
  color: #d1530f;
`;


const Skogen = () => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>{content.attributes.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Titillium+Web"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Background />
        <Container>
          <Title>{content.attributes.title}</Title>
          {content.attributes.cards.map(card => (
            <Card>
              {card.title && <h2>{card.title}</h2>}
              {card.ingress && <Ingress>{card.ingress}</Ingress>}
              <ReactMarkdown>{card.body}</ReactMarkdown>
            </Card>
          ))}
        </Container>
      </main>
    </div>
  );
};

export default Skogen;
