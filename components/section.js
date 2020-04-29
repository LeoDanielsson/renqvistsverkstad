import styled from 'styled-components';
import { medium } from '../breakpoints';
import { gold } from '../colors';

const StyledSection = styled.section`
  display: grid;
  grid-column-gap: 32px;
  @media (min-width: ${medium}) {
    grid-template-columns: 3fr 2fr;
  }
`;

const Header = styled.h2`
  @media (min-width: ${medium}) {
    grid-column: span 2;
  }
`;

const Section = ({ title, image, children }) => (
  <StyledSection>
    {title && <Header>{title}</Header>}
    <div>{children}</div>
    {image && <img src={image} alt='' />}
  </StyledSection>
);

export default Section;
