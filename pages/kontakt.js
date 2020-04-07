import Container from '../components/container';
import Layout from '../components/layout';
import Section from '../components/section';

const Contact = () => (
  <Layout title='Kontakt'>
    <Container>
      <h1>Kontakt</h1>
      <Section image='/images/verkstad.jpg'>
        Adress:
        <address>
          Renqvists Verkstad
          <br />
          Spångvägen 23
          <br />
          13237 Saltsjöbo
        </address>
        <h2>Hitta hit</h2>
        <p>
          <strong>Kollektivt:</strong> Buss 444 från Slussen till Orminge
          centrum, sedan buss 421 till Badhusvägen. Följ sedan skyltning mot
          Renqvists verkstad.
        </p>
        <p>
          <a href='https://goo.gl/maps/bhrdi47AWjZyohoYA' target='_blank'>
            Klicka för karta
          </a>
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
      </Section>
    </Container>
  </Layout>
);

export default Contact;
