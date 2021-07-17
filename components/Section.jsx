import styled from 'styled-components';
import { medium } from '../breakpoints';
import Link from 'next/link';
import CtaLink from './CtaLink';

const StyledSection = styled.section`
  display: grid;
  grid-column-gap: 32px;
  margin-bottom: 32px;
  @media (min-width: ${medium}) {
    grid-template-columns: ${({ fullWidth }) =>
      fullWidth ? '1fr' : '3fr 2fr'};
  }
`;

const Header = styled.h2`
  @media (min-width: ${medium}) {
    grid-column: span 2;
  }
  a {
    text-decoration: none;
  }
`;

const Text = styled.div`
  margin-bottom: 16px;
`;

const Section = ({ title, image, children, link }) => (
  <StyledSection fullWidth={!image}>
    {title && (
      <Header>{link ? <Link href={link}>{title}</Link> : title}</Header>
    )}
    <Text>
      {children}{' '}
      {link && (
        <CtaLink href={link}>
          <a>Klicka för att läsa mer</a>
        </CtaLink>
      )}
    </Text>
    {image &&
      (link ? (
        <Link href={link}>
          <a>
            <img src={image} alt="" />
          </a>
        </Link>
      ) : (
        <img src={image} alt="" />
      ))}
  </StyledSection>
);

export default Section;
