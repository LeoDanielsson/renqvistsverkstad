import styled from 'styled-components';
import { medium } from '../breakpoints';

const StyledSection = styled.section`
  display: grid;
  grid-column-gap: 32px;
  @media (min-width: ${medium}) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Header = styled.h2`
  @media (min-width: ${medium}) {
    grid-column: span 2;
  }
`;

const Content = styled.div``;

const Body = styled.body``;

const ImageContainer = styled.div``;

const Section = ({ title, image, children }) => (
  <StyledSection>
    {title && <Header>{title}</Header>}
    <Body>{children}</Body>
    {image && (
      <ImageContainer>
        <img src={image} alt='' />
      </ImageContainer>
    )}
  </StyledSection>
);

export default Section;
