import styled from 'styled-components';
import { gold } from '../colors';

export const Wrapper = styled.section`
  margin-bottom: 8px;
`;

export const EventDate = styled.time`
  text-transform: uppercase;
  font-family: 'Montserrat';
  margin-bottom: 8px;
  margin-top: 8px;
  font-weight: bolder;
  color: ${gold};
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
