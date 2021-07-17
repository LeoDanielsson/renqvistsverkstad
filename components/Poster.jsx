import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 700px;
`;

export default ({url}) => (
  <Wrapper>
    <a href={url} target="_blank">
      <img src={url} />
    </a>  
  </Wrapper>
)