const Poster = ({ url }) => (
  <div className="max-w-2xl">
    <a href={url} target="_blank">
      <img src={url} />
    </a>
  </div>
);

export default Poster;
