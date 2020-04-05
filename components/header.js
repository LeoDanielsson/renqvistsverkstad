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
  padding-bottom: 0;
`;

const Logo = styled.a`
  font-size: 32px;
  text-align: center;
  cursor: pointer;
  color: ${white};
  font-family: 'Merriweather';
  line-height: 1;
  margin-bottom: 16px;
  @media (min-width: ${medium}) {
    font-size: 48px;
    margin-bottom: 32px;
  }
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
