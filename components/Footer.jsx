import Container from "./Container";

const Footer = () => (
  <footer className="text-white">
    <Container className="flex justify-between">
      <address className="not-italic">
        <p>
          Renqvists Verkstad
          <br />
          Spångvägen 23
          <br />
          13237 Saltsjöbo
        </p>
        <p>
          E-post:{" "}
          <a href="mailto:kontakt@renqvistsverkstad.se">
            kontakt@renqvistsverkstad.se
          </a>
          <br />
          Telefon: <a href="tel:+46738262254">073 826 22 54</a>
        </p>
      </address>
      <div>
        Med stöd av Nacka kommun
        <a href="https://www.nacka.se/" target="_blank">
          <img className="block max-w-72" src="/images/nacka_logo1.webp" />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
