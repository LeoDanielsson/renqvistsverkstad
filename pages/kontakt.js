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
          <h2>Adress</h2>
          <address>
            Renqvists Verkstad
            <br />
            Spångvägen 23
            <br />
            13237 Saltsjöbo
          </address>
          <p>
            {' '}
            <a href='https://goo.gl/maps/bhrdi47AWjZyohoYA' target='_blank'>
              Öppna i Google Maps
            </a>
          </p>
          <h2>Ta sig hit kollektivt</h2>
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
        <a
          href='https://www.google.com/maps/place/Renqvists+verkstad/@59.3354556,18.2432392,12.08z/data=!4m5!3m4!1s0x465f83d5bb10d64f:0xddc8c3fb4df625aa!8m2!3d59.348078!4d18.2756484'
          target='_blank'
        >
          <img src='/images/karta.png' />
        </a>
      </Grid>
    </Container>
  </Layout>
);

export default Contact;
