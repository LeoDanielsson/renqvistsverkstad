import Container from '../components/container';
import Layout from '../components/layout';
import styled from 'styled-components';
import { large } from '../breakpoints';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 32px;
  @media (min-width: ${large}) {
    grid-template-columns: 2fr 3fr;
  }
`;

const Contact = () => (
  <Layout title='Kontakt'>
    <Container>
      <h1>Kontakt</h1>
      <Grid>
        <div>
          Adress:
          <address>
            Renqvists Verkstad
            <br />
            Spångvägen 23
            <br />
            13237 Saltsjöbo
          </address>
          <h2>Kollektivtrafik</h2>
          <p>
            Buss 444 från Slussen till Orminge centrum, sedan buss 421 till
            Badhusvägen. Följ sedan skyltning mot Renqvists verkstad.
          </p>
          <h2>Vid frågor</h2>
          <p>
            Skriv till oss på{' '}
            <a href='mailto:kontakt@renqvistsverkstad.se'>
              kontakt@renqvistsverkstad.se
            </a>{' '}
            eller ring: <a href='tel:+46738262254'>073 826 22 54</a> eller{' '}
            <a href='tel:+46736249285'>073 624 92 85</a>.
          </p>
        </div>
        <a href='https://goo.gl/maps/bhrdi47AWjZyohoYA' target='_blank'>
          <img src='/images/karta.png' />
        </a>
      </Grid>
    </Container>
  </Layout>
);

export default Contact;
