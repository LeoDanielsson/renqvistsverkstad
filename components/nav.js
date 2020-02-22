import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { white, black } from '../colors';
import { medium } from '../breakpoints';

const links = [
  { href: '/', label: 'Aktuellt' },
  { href: '/boka', label: 'Boka visning' },
  { href: '/sociala-projekt', label: 'Sociala projekt' },
  { href: '/historik', label: 'Historik' },
  { href: '/om-museet', label: 'Om museet' }
];

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 80px;
  transform: translateX(-100%);
  transition: transform 0.25s;

  @media (min-width: ${medium}) {
    position: relative;
    transform: none;
  }

  ul {
    margin: 0;
    display: flex;
    list-style: none;
  }

  li {
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: ${({ active }) => (active ? black : white)};
  background-color: ${({ active }) => (active ? white : black)};
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <StyledNav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}-${label}`}>
            <Link href={href}>
              <NavLink active={pathname === href}>{label}</NavLink>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
