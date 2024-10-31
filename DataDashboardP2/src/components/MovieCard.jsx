import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`}>
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  </Link>
);

export default MovieCard;
