import styled from 'styled-components';
import { medium, large } from '../breakpoints';
import { white, black } from '../colors';

const Container = styled.div`
  background-color: ${({ dark }) => (dark ? black : white)};
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 8px;
  @media (min-width: ${medium}) {
    padding: 32px 32px;
  }
  @media (min-width: ${large}) {
    padding: 64px;
  }
  border-radius: 2px;
`;

export default Container;
