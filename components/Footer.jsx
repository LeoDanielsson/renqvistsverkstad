import Container from './Container';
import styled from 'styled-components';
import { white } from '../colors';
import { medium } from '../breakpoints';

const Wrapper = styled.footer`
  color: ${white};
  address {
    font-style: normal;
  }
`;

const FooterContent = styled(Container)`
  @media (min-width: ${medium}) {
    display: flex;
    justify-content: space-between;
  }
`;

const NackaLogo = styled.img`
  display: block;
  max-width: 300px;
`;

const Footer = () => (
  <Wrapper>
    <FooterContent>
      <address>
        <p>
          Renqvists Verkstad
          <br />
          Spångvägen 23
          <br />
          13237 Saltsjöbo
        </p>
        <p>
          E-post:{' '}
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
          <NackaLogo src="/images/nacka_logo1.webp" />
        </a>
      </div>
    </FooterContent>
  </Wrapper>
);

export default Footer;
