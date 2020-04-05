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
        <p>
          Vid frågor:
          <br />
          Skriv till oss på{' '}
          <a href='mailto:kontakt@renqvistsverkstad.se'>
            kontakt@renqvistsverkstad.se
          </a>{' '}
          eller ring: <a href='tel:+46738262254'>073 826 22 54</a>
        </p>
      </Section>
    </Container>
  </Layout>
);

export default Contact;
