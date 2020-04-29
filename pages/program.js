import Layout from '../components/layout';
import Container from '../components/container';
import Event from '../components/event';
import Section from '../components/section';

export const events = [
  {
    date: 'Söndag 10 maj',
    texts: [
      'Öppen gård, möjligt att besöka vår nybyggda utomhusutställning. Workshopen ni tar med er hem! ”Vår mosaik 2020”. Bilder och tankar från våren 2020. Alla får vara med, vi bygger en gemensam gipsmosaik, var och en gör sin del hemma. Vi håller med färgade gipser som ni kan rista in era bilder i. Ni får med er en färgad gips-bit samt instruktioner om hur ni gör. Vi samlar in och bygger en gipsmosaik till hösten! Öppet 12-16.',
    ],
  },
  {
    date: 'Söndag 17 maj',
    texts: [
      'Öppen gård och ”Mäktig mosaik 2020” Om möjligt; utställningen  ”Skissen och skulpturen”. 12-16',
    ],
  },
  {
    date: 'Söndag 31 maj',
    texts: [
      'Öppen gård och ”Mäktig mosaik 2020” Om möjligt; utställningen ”Skissen och skulpturen".',
    ],
  },
  {
    date: 'Söndagen 7 juni',
    texts: [
      'Öppen gård och ”Mäktig mosaik 2020” Om möjligt; utställningen ”Skissen och skulpturen”.',
    ],
  },
  {
    date: 'Söndagen 23 augusti',
    texts: ['Vernissage för utställningen ”Ombord” och workshop i lera, 12-16'],
  },
  {
    date: 'Söndag 30 augusti',
    texts: [
      'Öppet Hus, utställningen ”Ombord”, muséet och musikfest, 12-19, program kommer senare.',
    ],
  },
  {
    date: 'Söndag 6 september',
    texts: [
      'Öppet Hus, utställningen ”Ombord”, muséet och workshop i lera, 12-16',
    ],
  },
  {
    date: 'Söndag 13 september',
    texts: [
      'Öppet Hus, uställningen ”Ombord”, muséet och mosaik-workshop, 12-16',
    ],
  },
  {
    date: 'Söndag 20 september',
    texts: [
      'Öppet Hus samt Finissage för utställningen ”Ombord” med grillning i höstluften och ler-workshop, 12-16',
    ],
  },
];

const Program = () => (
  <Layout title='Program'>
    <Container>
      <h1>Program</h1>
      <Section image='/images/workshop1.jpg'>
        <p>
          Nu satsar vi på vår skulpturgård så ni kan besöka oss i friska luften.
          Vi bygger en utställning på gården utanför verkstaden och förlägger
          workshops och andra aktiviteter utomhus.
        </p>
        <p>
          Till våren öppnar vi vår gårdsutställning och sjösätter workshopen
          ”Mäktig mosaik 2020” en workshop där var och en kan ge sitt bidrag
          till en gemensam mosaik om våren och året 2020. Till höstens finissage
          kommer vi ställa samman alla bidrag till en gemensam mosaik.
        </p>
        <p>
          Vi håller verkstan tillfälligt stängd pga coronakrisen men är redo att
          öppna så snart restriktionerna lättar. Se vår hemsida där vi håller er
          uppdaterade.
        </p>
        <p>
          När vi åter kan öppna visar vi utställningen ”Skissen och skulpturen”
          som handlar om den process som leder fram till ett offentligt verk.
        </p>
        <h3>Med anledning av coronakrisen:</h3>
        <p>
          <strong>
            Vi reserverar oss för vissa ändringar eller anpassningar i
            programmet och håller er uppdaterade för vad som gäller för varje
            Öppet Hus. Håll ögonen öppna!
          </strong>
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
        Skulptörens verkstad. 100 kr/person Torsten Renqvists verkstad. Dock
        minimiavgift på 1000 kr för en visning. För mer information se nedan. Vi
        kommer med aktuell information i början av maj som tar hänsyn till hur
        vi handskas med coronakrisen.
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
