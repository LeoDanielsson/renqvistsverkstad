import Layout from '../components/layout';
import Container from '../components/container';
import Section from '../components/section';

const About = () => (
  <Layout>
    <Container>
      <h1>Om Renqvists verkstad</h1>
      <Section image='/images/verkstad.jpg'>
        <p>
          I vackra Kummelnäs i Nacka i skulptören Torsten Renqvists verkstad, är
          ett litet museum över de skulptörens alla hantverk under uppbyggnad.
        </p>
        <p>
          I verkstaden demonstreras olika material och de olika arbetssätt,
          verktyg och processer som är knutna till en skulptörs arbete.
        </p>
        <p>
          På den här platsen i Kummelnäs har många konstnärer mötts och arbetat
          genom åren. Den genuina och poetiska stämningen finns här och
          förmedlar en förståelse för hur tanken och känslan finner sin form i
          olika material och tekniker.
        </p>
        <p>
          I anslutning till Skulptörens verkstad finns Torsten Renqvists ateljé,
          möjlig att boka för en visning.
        </p>
        <p>
          Här kommer även filmer om olika skulptörers arbete att visas och ett
          bildspel presenteras av interiörer i skulptörers ateljéer och
          verkstäder.
        </p>
        <p>
          Här finns ett referensbibliotek under uppbyggnad och information om
          alla de skickliga yrkesmän och företag som förvaltar och utövar den
          hantverksskicklighet som behövs för att en skulptur ska kunna bli
          till.
        </p>
        <p>
          I verkstaden visas också en skulpturutställning som är ett resultat av
          de olika material och tekniker som presenteras.
        </p>
      </Section>
      <Section title='Föreningen' image='/images/lotta.jpg'>
        <p>
          Det är föreningen Renqvists Verkstad som ligger bakom idé och
          uppförande samt deltar i skulpturutställningen.
        </p>
        <p>
          Föreningsmedlemmar är Bo Andersson, Lotta Enocsson, Mats Eriksson,
          Annika Heed, Ingegerd Lohland, Bitte Jonasson Åkerlund, Kajsa Mattas,
          Mats Åberg och Erik Åkerlund samt Anna-Lena Renqvist.
        </p>
        <p>
          Torsten Renqvistsällskapet förvaltar och informerar om Torsten
          Renqvists konstnärskap.
        </p>
        <p>
          De bägge föreningarna samarbetar och deras verksamheter går ibland
          samman.
        </p>
      </Section>
      <Section title='Besök oss' image='/images/hastar.jpg'>
        <p>
          I anslutning till en visning i verkstan går det även bra att boka en
          visning i Torsten Renqvists ateljé.
        </p>
        <p>
          I verkstaden och ute på gården kommer det att finnas möjlighet att
          känna på verktyg och material. Upplev hur det är att hugga i sten
          eller trä! Testa andra material och tekniker.
        </p>
        <p>
          Skulptörens verkstad är öppen för bokning av visningar. I anknytning
          till visningar är det möjligt att även boka kortare workshops i
          skulpturala tekniker. Läs mer på sidan workshops.
        </p>
        <p>
          En visning av verkstan passar alla åldrar och grupper. Lämpligt för
          t.ex. skolor, yrkesskolor, konstföreningar och andra föreningar eller
          privata grupper.
        </p>
        <p>Varmt välkomna!</p>
        <p>Projektgruppen för Skulptörens verkstad</p>
        <p>Lotta Enocsson, Mats Eriksson och Annika Heed</p>
      </Section>
    </Container>
  </Layout>
);

export default About;
