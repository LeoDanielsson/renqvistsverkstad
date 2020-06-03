import Layout from '../../components/layout';
import Container from '../../components/container';
import Section from '../../components/section';

const Gardsutstallning = () => (
  <Layout>
    <Container>
      <h1>Välkommen till Skulptörens verkstads nya gårdsutställning!</h1>
      <Section image='/images/gardsutstallning1.jpg'>
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
        image='/images/gardsutstallning2.jpg'
        title='Under våren 2020 får vi se på konst utomhus.'
      >
        <p>
          Välkommen att sitta ner och se på konsten och deltag i vår självgående
          workshop ”Mäktig mosaik” där vi ristar in bilder med anknytning till
          våren 2020. Till hösten samlar vi bilderna och monterar upp dem till
          en gemensam stor mosaik.
        </p>
        <p>
          Inne i verkstan håller vi utställningen ”Skissen och skulpturen” redo
          för att öppnas när det åter är möjligt.
        </p>
      </Section>
      <Section
        image='/images/gardsutstallning3.jpg'
        title='Deltagande konstnärer i gårdsutställningen'
      >
        <ul>
          <li>Bo Andersson: ”Fragment” gjutjärn</li>
          <li>
            Lotta Enocsson: ”Sudip” lekskulptur ekebergsmarmor ”Vilande i sig
            själv” ekebergsmarmor
          </li>
          <li>
            Mats Eriksson: ”Undflyende ansikten” betong ”Särminer försöker
            överleva morgondagen” betong
          </li>
          <li>
            Annika Heed: ”Skogen” kol på betong ”Apostlar” betong ”Taggisg dans”
            järn, ”Gitarrist” järn
          </li>
          <li>
            Dina Hviid: ”Mahabalipuram” indisk granit ”Flygfäviste” lärk ”Svart”
            gran
          </li>
          <li>
            Torsten Renqvist: ”Tvingad bön” brons, ”Halv elefant” betong,
            ”Negativt krucifix” stengods
          </li>
          <li>
            Yemesi Wilson: ”Dansant Torso marmor, « Gyllene Pegasus” marmor
          </li>
          <li>
            Bitte Jonason Åkerlund: Trädgårdspudlar, tik och valp” modern betong
          </li>
        </ul>
      </Section>
    </Container>
  </Layout>
);

export default Gardsutstallning;
