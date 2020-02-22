import Nav from './nav';
import styled from 'styled-components';
import { white, black } from '../colors';
import { medium } from '../breakpoints';
import Link from 'next/link';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  background-color: ${black};

  @media (min-width: ${medium}) {
    padding-bottom: 0;
  }
`;

const Logo = styled.a`
  font-size: 48px;
  color: ${white};
  font-family: 'Merriweather';
  line-height: 1;
  margin-bottom: 32px;
`;

const Header = () => (
  <StyledHeader>
    <Link href='/'>
      <Logo>Renqvists verkstad</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
