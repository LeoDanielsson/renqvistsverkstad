import Layout from '../components/layout';
import Container from '../components/container';
import Event from '../components/event';
import Section from '../components/section';

export const springEvents = [
  {
    date: 'Lördag 22 maj (OBS! Lördag istället för söndag)',
    texts: [
      'Öppet Hus',
      'Öppning av utbyggda Skulpturgården! Skulptur-frågelek, muséet och workshop med ler-djur till båten ”Ombord” Visning av muséet kl 13 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Lördag 29 maj',
    texts: [
      'Öppet Hus',
      'Skulptera en skalbagge i samarbete med Boo Miljö- och Naturvänner 10.30-15.30.',
      'Vi bygger direkt i gips och skulpterar efter modell. Patinering (ytbehandling) av skalbaggen ingår i kursen.',
      'Anmäl er senast 27/5 till annikaheed@hotmail.com  Ta med matsäck, kaffe och bullar bjuds det på!',
    ],
  },
  {
    date: 'Söndag 30 maj',
    texts: [
      'Öppet Hus',
      'Visning av Skulpturgården och muséet, workshop med lerdjur till båten ”Ombord”',
      'Visning av muséet kl 13 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Söndag 6 juni',
    texts: [
      'Öppet Hus',
      'Visning av Skulpturgården och muséet, workshop med lerdjur till båten ”Ombord”',
      'Visning av muséet kl 13 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Söndag 13 juni',
    texts: [
      'Öppet Hus',
      'Visning av Skulpturgården och muséet, workshop med lerdjur till båten ”Ombord”',
      'Visning av muséet kl 13 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
];

const fallEvents = [
  {
    date: 'Söndag 29 augusti',
    texts: [
      'Öppet Hus',
      'Vernissage för utställningen ”Skulptörens hemligheter”',
      'Visning av utställningen kl 13',
      'Skulpturgården och muséet, workshop gips-arbeten till Stuckväggen ”Alhambra”',
      'Visning av muséet kl 13.30 och Torsten Renqvists ateljé kl 14',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Söndag 5 september',
    texts: [
      'Öppet Hus',
      'Utställningen ”Skulptörens hemligheter”',
      'Visning av utställningen kl 13',
      'Skulpturgården och muséet, workshop drop-in under hela dagen, Gips-arbeten till Stuckväggen ”Alhambra”.',
      'Visning av muséet kl 13.30 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Söndag 12 september',
    texts: [
      'Öppet Hus',
      'Utställningen ”Skulptörens hemligheter”',
      'Visning av utställningen kl 13',
      'Skulpturgården och muséet, workshop drop-in under hela dagen, Gips-arbeten till Stuckväggen ”Alhambra”.',
      'Visning av muséet kl 13.30 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
  {
    date: 'Söndag 19 september',
    texts: [
      'Öppet Hus',
      'Utställningen ”Skulptörens hemligheter”',
      'Visning av utställningen kl 13',
      'Skulpturgården och muséet, workshop drop-in under hela dagen, Gips-arbeten till Stuckväggen ”Alhambra”.',
      'Visning av muséet kl 13.30 och Torsten Renqvists ateljé kl 14.',
      'Öppet 12-16',
    ],
  },
];

const Program = () => (
  <Layout title="Program">
    <Container>
      <h1>Program</h1>
      <Section image="/images/workshop1.jpg">
        <p>
          Nu satsar vi på vår nya skulpturgård, ni kan vandra runt och se vår
          utställning i friska luften.
        </p>
        <p>
          I verkstaden går vi in rekommenderat antal personer i taget, beroende
          på hur läget ser ut i samhället.
        </p>
        <p>
          På söndagar håller vi Öppet Hus i Skulptörens verkstad mellan kl 12.00
          -16.00! Vi visar då verkstaden med sin fasta skulpturutställning och
          hantverksstationer och håller workshop på gården utanför. Vi
          fortsätter i vår med att förse arken med djur i lera och till hösten
          bygger vi vår gemensamma stuckaturvägg ”Alhambra”!
        </p>
        <p>
          Vi reserverar oss för vissa ändringar eller anpassningar i programmet
          pga coronakrisen och håller er uppdaterade på hemsidan för vad som
          gäller för varje Öppet Hus. Håll ögonen öppna!
        </p>
      </Section>
      <Section title="Program våren 2021" image="/images/evenemang.jpg">
        {springEvents.map((event) => (
          <Event {...event} />
        ))}
      </Section>
      <Section title="Program hösten 2021" image="/images/evenemang.jpg">
        {fallEvents.map((event) => (
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
      <Section title="Kurser" image="/images/workshop2.jpg">
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
          Folkhälsomyndighetens rekommendationer. Varje kurs kommer att ha en
          detaljerad beskrivning för formerna som kommer att iakttagas med
          hänsyn till allas säkerhet i och med omständigheterna som råder.
        </p>
      </Section>
      <Section title="Kursprogram">
        <Event
          title="Kurs i porträttmodellering"
          date="Lördag 21/8 10.30-16.00  | Söndag 22/8 10.30-16.00  | Lördag 28/8 10.30-16.00"
        >
          <p>
            Lär dig modellera på klassiskt vis i lera. Ni modellerar varandra i
            kursen så det kan vara bra att ta med sig en vän eller släkting till
            kursen för att skapa deras porträtt. Både modell och modellör lär
            sig lika mycket eftersom ni byts av hela tiden på ett rättvist sätt.
            Ni får ett porträtt i lera som senare kan brännas.
          </p>
          <p>Lärare Annika Heed och Lotta Enocsson.</p>
          <p>Passar för alla åldrar från 10 år och uppåt</p>
          <p>Kursen blir av om minst 4 personer anmäler sig.</p>
        </Event>
        <Event
          title="Kurs i betonggjutningsteknik"
          date="Lördag 11/9 10:30-16:00  |  Lördag 18/9 10:30-16:00  |  Lördag 26/9  10:00-12:00"
        >
          <p>
            Lär er gjuta en skulptur i lera till betong. I kursen ingår
            kunskaper kring vad som är enkelt att gjuta när ni arbetar i lera.
            Formtagning med gips på lera. Gjutning av betong i gipsform.
            Uthuggning. Efter genomgången kurs har ni de basala kunskaper som
            behövs för att arbeta vidare på egen hand.
          </p>
          <p>Pris: 2700 kr/person</p>
          <p>Passar för alla åldrar från 10 år och uppåt</p>
          <p>Kursen blir av om det anmäls minst 5 personer.</p>
          <p>Lärare Annika Heed + Mats Eriksson</p>
        </Event>
        <Event
          title="Kurs i latexmasker"
          date="Lördag 25/9 10.30-16.00  |  Söndag 26/9 10.30-16.00  | Lördag 2/10 10.30-12.00  | Söndag 3/10 10.30-12.00"
        >
          <p>
            Ni gör en mask i lera som kan vara skräckinjagande, rolig. Monster,
            människa eller djur.
          </p>
          <p>
            Ni tar en gipsform på lermasken för att sedan gjuta latex i
            gipsformen. Ni får en latexmask som går att måla i de färger ni
            önskar och sedan sätta på er och glädja/skrämma er omgivning.
          </p>
          <p>Pris: 2300 kr/person</p>
          <p>Kursen blir av om det anmäls minst 5 personer.</p>
          <p>Lärare Annika Heed + Mats Eriksson</p>
        </Event>
      </Section>
    </Container>
  </Layout>
);

export default Program;
