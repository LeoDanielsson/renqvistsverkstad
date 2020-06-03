import Layout from '../../components/layout';
import Container from '../../components/container';
import Section from '../../components/section';
import Link from 'next/link';

const Exhibitions = () => (
  <Layout>
    <Container>
      <h1>Utställningar</h1>
      <Section
        title='Välkommen till Skulptörens verkstads nya gårdsutställning!'
        image='/images/gardsutstallning1.jpg'
        link='/utstallningar/gardsutstallning'
      >
        <p>
          När Torsten Renqvist arbetade i verkstaden var gården en samlingsplats
          för gemensamt arbete och olika projekt.
        </p>
        <p>
          Nu får gården vara en samlingsplats för att låta bilder och skulpturer
          fortsätta tala och berätta, nu när vi inte kan samlas inomhus som
          vanligt.
        </p>
        <p>
          Här visar åtta konstnärer verk i olika uttryck och material.
          Gårdsutställningen kommer att förändras under tidens gång och detta är
          starten!
        </p>
      </Section>
      <Section
        title='Skissen och skulpturen'
        image='/images/skissen1.jpg'
        link='/utstallningar/skissen-och-skulpturen'
      >
        <p>
          Skulptörens verkstad presenterar vårens utställning ”Skissen och
          skulpturen”. Utställningen anknyter till Skulptörens verkstads
          berättande om hur en skulptur kommer till.
        </p>
        <p>
          Från tekniker och material kommer vi nu in på själva processen.
          Varifrån kommer idén, hur hittar konstnären den slutliga formen och
          hur ser olika konstnärers vägar till ett färdigt verk ut?
        </p>
        <p>
          Sökandet efter den rätta formen, material som har det rätta uttrycket,
          anpassning till en viss plats. Det är många komponenter som spelar in
          och här söker vi ta del av hur det kan gå till.
        </p>
      </Section>
    </Container>
  </Layout>
);

export default Exhibitions;
