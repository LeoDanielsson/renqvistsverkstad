import Layout from '../../components/layout';
import Container from '../../components/container';
import Section from '../../components/section';

const Skissen = () => (
  <Layout>
    <Container>
      <h1>Skissen och skulpturen</h1>
      <Section image='/images/skissen1.jpg'>
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
        <p>
          När vi velat presentera hur en process ser ut fram till ett färdigt
          verk, har vi sett att det finns lika många olika vägar som det finns
          konstnärer. Här i Skulptörens verkstad ser ni olika exempel.
        </p>
      </Section>
      <Section
        title='Deltagande konstnärer i utställningen'
        image='/images/skissen2.jpg'
      >
        <p>
          <strong>Bo Andersson</strong> är lika mycket tecknare som skulptör och
          ur hans mustiga teckningar växer skulpturala verk fram, som samtidigt
          samspelar med sitt ursprung - teckningen. Därmed sker en ny
          interaktion dem emellan.
        </p>
        <p>
          <strong>Mats Åberg</strong>s lilla skiss har lika mycket färdigt
          uttryck som sin offentliga större version. Här har han undersökt sitt
          uttryck fast i mindre format än slutligt verk. På så sätt har han
          vetskap om att den offentliga skulpturen kommer att fungera i sitt
          sammanhang.
        </p>
        <p>
          <strong>Annika Heed</strong> utgår alltid från teckningar eller snabba
          impulsiva små skisser i plastelina eller vax. Det är ett sätt att
          fånga det omedelbara som sedan får föras vidare i en ny skulptural
          form.
        </p>
        <p>
          <strong>Mats Eriksson</strong>s skisser till ”Tumbatarzan” har i sitt
          mindre format fångat hela den humor och värme som därefter kunnat
          överföras till det i format större verket.
        </p>
        <p>
          <strong>Dina Hviid</strong> visar en mindre sten som är upprinnelsen
          till en stor monumental marmorskulptur. Ett arbete som kräver en
          visshet att bildtanken håller i storformat.
        </p>
        <p>
          <strong>Bitte Jonason</strong> Åkerlund arbetar med lätthet och
          lekfullhet med sina skisser i otaliga versioner och former för att
          hitta den ultimata formen för den offentliga platsen.
        </p>
        <p>
          <strong>Lotta Enocsson</strong> är målare och tecknare samt skulptör.
          Hennes skulpturala former finns i ett tänkt rumsligt sammanhang och
          kommunicerar också med den omgivning de befinner sig i.
        </p>
        <p>
          <strong>Torsten Renqvist</strong> målare, grafiker, tecknare och
          skulptör hade en rik värld av uttryck att låta sina skulpturer växa
          ur. De känsliga små blyertsskisserna berättar om vägen fram till
          formen. I skulpturernas former återfinns grafikerns linjespel och
          tecknarens känsla för rytm.
        </p>
        <p>
          <strong>Evert Lindfors</strong> arbetade mycket i sitt material som
          oftast var lera, bearbetad på olika sätt. Det fanns en direkthet i
          uttrycket och ur ett myller av skulpturer växte de mest fantastiska
          skapelser fram.
        </p>
      </Section>
    </Container>
  </Layout>
);

export default Skissen;
