import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { white, black, copper } from '../colors';

const links = [
  { href: '/program', label: 'Program' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
];

const StyledNav = styled.nav`
  white-space: nowrap;
  ul {
    margin: 0;
    display: flex;
    list-style: none;
    overflow-x: scroll;
    max-width: 100vw;
  }

  li {
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: ${({ active }) => (active ? copper : white)};
  background: ${({ active }) => (active ? white : 'none')};
  border-bottom: ${({ active }) => (active ? `2px solid ${white}` : 'none')};
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 2px 2px 0 0;
  display: block;
  cursor: pointer;
  &:hover {
    background: $white;
    color: $black;
  }
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
