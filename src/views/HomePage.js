import { useState, useEffect } from 'react';
import { fetchMovie } from '../services/movie-API';
import MovieHomePageCard from '../components/MoviesListCard/MovieHomePageCard';

import { Title } from '../styled/Components.styled';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      await fetchMovie().then(data => setFilms(data.results));
    };
    fetchMovieList();
  }, []);

  console.log('films1:', films);
  console.log('Object.keys(films1)', Object.keys(films));

  return (
    <article>
      <Title>Trending today</Title>
      <MovieHomePageCard films={films} />
    </article>
  );
}
