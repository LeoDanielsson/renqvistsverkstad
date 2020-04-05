import styled from 'styled-components';
import { copper } from '../colors';

export const Wrapper = styled.section`
  margin-bottom: 8px;
`;

export const EventDate = styled.time`
  text-transform: uppercase;
  font-family: 'Merriweather';
  margin-bottom: 8px;
  margin-top: 8px;
  font-weight: bolder;
  color: ${copper};
`;

const Event = ({ date, texts }) => (
  <Wrapper>
    <EventDate>{date}</EventDate>
    {texts.map((text, i) => (
      <p key={i}>{text}</p>
    ))}
  </Wrapper>
);

export default Event;
