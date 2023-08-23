import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films')
      if (!response.ok) {
        throw new Error('Somthing went wrong')
      }

      const data = await response.json();
      const transformedMovies = data.results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        }
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;

  if (isLoading)
    content = <p>Loading...</p>;

  if (!isLoading && error)
    content = <p>{error}</p>;

  if (!isLoading && !error && movies.length > 0)
    content = <MoviesList movies={movies} />;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
