import styled from 'styled-components';

const YoutubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  width: 100%;
`;

const YouTube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const YoutubeVideo = ({ youtubeId }) => (
  <YoutubeWrapper>
    <YouTube
      src={`https://www.youtube.com/embed/${youtubeId}`}
      frameborder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
      modestbranding
      rel='0'
      autoplay='1'
    />
  </YoutubeWrapper>
);

export default YoutubeVideo;
