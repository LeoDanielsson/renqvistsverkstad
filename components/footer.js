import Container from './container';
import styled from 'styled-components';
import { white, black } from '../colors';

const Wrapper = styled.footer`
  color: ${white};
  background-color: ${black};
  address {
    font-style: normal;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container dark>
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
          <a href='mailto:kontakt@renqvistsverkstad.se'>
            kontakt@renqvistsverkstad.se
          </a>
          <br />
          Telefon: <a href='tel:+46738262254'>073 826 22 54</a>
        </p>
      </address>
    </Container>
  </Wrapper>
);

export default Footer;
