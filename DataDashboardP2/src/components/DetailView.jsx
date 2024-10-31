const DetailView = ({ movie }) => (
  <div>
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
    {/* Add more detailed information if needed */}
  </div>
);

export default DetailView;
