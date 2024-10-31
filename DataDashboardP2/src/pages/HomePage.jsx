import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
