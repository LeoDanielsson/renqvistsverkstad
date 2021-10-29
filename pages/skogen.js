import Head from 'next/head';
import styled from 'styled-components';
import { large, medium } from '../breakpoints';
import GlobalStyle from '../components/GlobalStyle';
import Poster from '../components/Poster';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  background-image: url('/images/mossigskog_desk.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${large}) {
    background-image: url('/images/mossigskog_xl.jpg');
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #eee;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 9vw;
  text-transform: uppercase;
  margin: 30vh 8px;
  text-shadow: 4px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  @media (min-width: ${medium}) {
    font-size: 60px;
  }
  @media (min-width: ${large}) {
    font-size: 80px;
  }
`;

const Card = styled.div`
  width: 100%;
  color: #255957;
  background-color: rgba(240, 240, 240, 0.95);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  padding: 32px;
  margin: 80px;
  h2 {
    color: #d1530f;
  }
  font-size: 1.1rem;
`;

const Ingress = styled.p`
  font-size: 1.3rem;
  color: #d1530f;
`;

const Image = styled.img`
  width: 400px;
  max-width: 80%;
  float: right;
  margin: 2rem !important;
`;

const Skogen = () => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Skulpturskogen Ed</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Titillium+Web"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Background />
        <Container>
          <Title>Skulpturskogen Ed</Title>
          <Card>
            <h2>Höstlovsaktiviteter med Skulpturorientering</h2>
            <Ingress>
              En bana med roliga uppdrag att lösa för barn i alla åldrar i
              Skulpturskogen Ed
            </Ingress>
            <p>Onsdag-söndag 3-7 november kl 11-15 </p>
            <p>Välkommen till knep och knåp i skogen!</p>{' '}
            <p>Kontakt 0738262254</p>
            <p>Kulturföreningen Källare-Skulpturskogen Ed</p>
          </Card>
          <Card>
            <h2>Välkommen till en höstdag i Skulpturskogen Ed!</h2>
            <Ingress>Söndagen 7 november kl 12-16</Ingress>
            <p>
              Skulpturskogen invigdes i april i år, istället för som i en
              skulpturpark finner ni här konsten i en liten vacker skog med
              promenadstigar.
            </p>
            <p>
              Vi har nu utökat utställningen i skogen och tänder eldar och
              bjuder på glüvine!
            </p>
            <p>Ta en promenad i skogen och passa på att besöka Villa Ed.</p>
            <p>
              Utställande konstnärer: Bo Andersson, Katinka Anders- son, Lotta
              Enocsson, Mats Eriksson, Annika Heed, Leif Kindgren, Filippa von
              Krusenstjerna, Sophi Vejrich, Hélène Vejrich.
            </p>
            <p>Restaurangen grillar i skogen för att fira in hösten.</p>
            <p>
              Varmt välkomna önskar Kulturföreningen Källaren som arrangerar
              Skulpturskogen Ed
            </p>
            <p>Tack till Bisslinge förvaltning AB</p>
          </Card>
          <Card>
            <h2>SKULPTURSKOGEN ED</h2>
            <Ingress>
              Skulpturskogen Ed är något så ovanligt som en skulpturpark som
              egentligen är en skog. Mitt i Upplands Väsbys vackra
              kulturlandskap, intill Villa Ed, ligger skogen med höga bokar och
              gamla ekar. I skogen visas konst av hög kvalitet. Konsten hänger
              samman med skogen men också med landskapet runtomkring, med sjön
              och den medeltida kyrkan och med ”Upplevelsestråket” en
              vandringsled som går kors och tvärs genom Upplands Väsby och
              sträcker sig ut till Sollentuna och de andra grannkommunerna.
            </Ingress>
            <Image src="/images/annikaskylt.jpg" />
            <p>
              I Skulpturskogen kan ni vandra på små stigar och upptäcka konst på
              ett nytt sätt, ni kan finna skulpturer i en dunge eller högt upp i
              trädkronorna eller gömda i kvisthålet på ett träd. Vandra runt och
              upplev konst i den vackra naturen och i friska luften. I
              skulpturskogen finns även olika ”Upptäcktsvandringar” att göra.
              Varje verk har något att berätta om historien, naturen eller om
              sin egen hemlighet. Läs gåtorna och se om ni kan svaren, det gör
              att ni deltar i skulpturskogen på ett roligt och lärorikt sätt.
              Foldrar med gåtor, frågor och svar finns att hämta i vårt skåp som
              finns intill skogens ingång. Vi har spännande
              ”upptäcktsvandringar” anpassade till olika åldrar, några för
              riktigt små barn.
            </p>

            <p>
              När ni vandrat är ni varmt välkomna till Villa Ed för en stunds
              vila och avkoppling. I den vackra trädgården med uteservering kan
              ni njuta av varma drycker, hembakat och hemlagat. Villa Ed är en
              gammal och vacker villa som idag är en unik handels- och
              mötesplats för alla sinnen. Förutom cafe & bistro hyser villan
              verksamheter såsom inredningsbutik, underkläder, massage, frisör,
              olika skönhetsbehandlingar, konsthantverk samt samtal och terapi.
            </p>
            <p>
              Skulpturskogen Ed invigs lördag 24 april kl 13.00 2021. För
              speciella händelser se Separat program på denna hemsida och på
              Villa Eds hemsida,{' '}
              <a href="https://www.villaed.com">www.villaed.com</a> där även en
              karta finns på vägbeskrivning. Upplevelsestråket kan ni läsa om på
              Upplands Väsbys hemsida{' '}
              <a href="https://www.upplandsvasby.se">www.upplandsvasby.se</a>
            </p>
            <Image src="/images/katinkaskylt.jpg" />
            <p>
              Utställande konstnärer våren 2021: Bo Andersson, Katinka
              Andersson, Mark Andersson, Åsa Elieson, Lotta Enocsson, Mats
              Eriksson, Annika Heed, Filippa von Krusenstjerna, Sophi Vejrich,
              Hélène Vejrich
            </p>
            <p>
              Utställningen i skogen kommer att skifta och delvis förändras
              under året och nya Upptäcktsvandringar och gåtor kommer att läggas
              i vårt informations-skåp.
            </p>
            <p>
              Ni kan boka visningar för grupper, även förskole och
              skolvisningar. Ni får en visning av skogen och kan uppleva den
              närmare genom våra upptäcktsvandringar med intressanta frågor och
              kartor av olika slag beroende på åldersgrupp.
            </p>
            <p>
              Kontakt
              <ul>
                <li>
                  Annika Heed{' '}
                  <a href="mailto:annikaheed@hotmail.com">
                    annikaheed@hotmail.com
                  </a>{' '}
                  <a href="tel:+46738262254">0738 262254</a>
                </li>
                <li>
                  Bo Andersson <a href="tel:+46735622752">0735 622752</a>
                </li>
              </ul>
            </p>
            <p>
              Vägbeskrivning: Från E4an avtag Upplands Väsby, kör till vänster
              in på Mälarvägen (om ni kommer från Stockholm) fortsätt på
              Mälarvägen, (850) i ca 4 km, tag höger in på Edsbyvägen vid
              skylten Villa Ed. Eds kyrka ligger lite längre fram till vänster.
            </p>
            <Image src="/images/stuga.jpg" />
            <p>Tack till Johan Curman, markägare</p>
            <p>Tack till Bisslinge och Svartinge gårdar</p>
            <p>Med stöd av Kultur och fritid, Upplands Väsby kommun</p>
            <p>Varmt Välkomna till Skulpturskogen Ed!</p>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default Skogen;
