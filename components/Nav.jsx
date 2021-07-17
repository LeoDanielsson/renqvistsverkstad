import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { white, darkGreen, copper } from '../colors';

const links = [
  { href: '/', label: 'Hem' },
  { href: '/program', label: 'Program' },
  { href: '/utstallningar', label: 'Utställningar' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/skogen', label: 'Skulpturskogen Ed' },
];

const StyledNav = styled.nav`
  white-space: nowrap;
  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    max-width: 100vw;
  }

  li {
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: ${white};
  border-bottom: ${({ active }) => (active ? `2px solid ${white}` : 'none')};
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
