import Layout from '../components/layout';
import Container from '../components/container';
import Event from '../components/event';
import Section from '../components/section';

export const events = [
  {
    date: 'Söndag 10 maj',
    texts: [
      'Vernissage ”Skissen och skulpturen” och workshop gips-scrafitti, kl 12-16',
    ],
  },
  {
    date: 'Söndag 17 maj',
    texts: ['Öppet Hus med utställning och mosaik-workshop, 12-16'],
  },
  { date: 'Söndag 31 maj', texts: ['Öppet Hus Utställning och ler- workshop'] },
  {
    date: 'Söndagen 7 juni',
    texts: [
      'Öppet Hus med utställning och workshop i gips. Musikfest under planering.',
      'I dagsläget osäkert om festen kan hållas. Mer information kommer.',
    ],
  },
  {
    date: 'Söndagen 23 augusti',
    texts: ['Vernissage för ”Ombord” och workshop i lera, 12-16'],
  },
  {
    date: 'Söndag 30 augusti',
    texts: [
      'Öppet Hus med utställning och musikfest, 12-19, program kommer senare.',
    ],
  },
  {
    date: 'Söndag 6 september',
    texts: ['Öppet Hus och workshop i lera, 12-19'],
  },
  {
    date: 'Söndag 13 september',
    texts: ['Öppet Hus och mosaik – workshop, 12 - 16'],
  },
  {
    date: 'Söndag 20 september',
    texts: [
      'Öppet Hus samt Finissage med grillning i höstluften ler-workshop, 12-16',
    ],
  },
];

const Program = () => (
  <Layout title='Program'>
    <Container>
      <h1>Program</h1>
      <Section image='/images/workshop1.jpg'>
        <p>
          Nu satsar vi på vår skulpturgård så ni kan besöka oss i friska luften
        </p>
        <p>
          Program de söndagar vi håller Öppet Hus i Skulptörens verkstad 12 -16
          presenteras nedan.
        </p>
        <p>
          Vi visar museet, aktuell utställning och Torsten Renqvists ateljé. Se
          även vårt spännande ateljébildspel där ni kan få titta in i olika
          skulptörers ateljéer, se filmer om Torsten Renqvist, Evert Lindfors
          mm. Utforska vår boklåda med utvalda konstböcker eller delta i våra
          workshops där alla kan delta oavsett ålder. Ta en kopp kaffe i vår
          skulpturgård utanför verkstaden.
        </p>
        <h3>Med anledning av coronakrisen:</h3>
        <p>
          Vi reserverar oss för vissa ändringar eller anpassningar i programmet
          och håller er uppdaterade för vad som gäller för varje Öppet Hus. Håll
          ögonen öppna!
        </p>
      </Section>
      <Section
        title='Evenemang vår och höst 2020'
        image='/images/evenemang.jpg'
      >
        {events.map((event) => (
          <Event {...event} />
        ))}
      </Section>

      <p>
        Välkommen att boka visningar av Skulptörens verkstad och Torsten
        Renqvists ateljé för mindre eller större grupper. 100 kr/person
        Skulptörens verkstad, 100 kr/person Torsten Renqvists verkstad. För mer
        information se nedan. Vi kommer med aktuell information i början av maj
        som tar hänsyn till hur vi handskas med coronakrisen.
      </p>
      <Section title='Kurser' image='/images/workshop2.jpg'>
        <p>
          Bokningsbara fördjupnings-kurser för små eller större grupper. I år
          startar vi upp kurser som erbjuder fördjupning inom ett ämne. Kurserna
          kommer att ligga under verksamhetsåret och startas upp när vi når upp
          i erforderligt deltagarantal. Lämpligt för föreningar, privata
          grupper, olika yrkesgrupper eller andra verksamheter. Se på
          beskrivning av respektive kurs.
        </p>
        <p>
          Vi har tyvärr måst ställa in vårens fördjupningskurser men kommer att
          se om de kan förläggas till hösten istället.
        </p>
        <p>
          Vi kommer att planera så att kurserna kan hållas med iakttagande av
          folkhälsomyndighetens rekommendationer. Varje kurs kommer att ha en
          detaljerad beskrivning för formerna som kommer att iakttagas med
          hänsyn till allas säkerhet i och med omständigheterna som råder.
        </p>
      </Section>
    </Container>
  </Layout>
);

export default Program;
