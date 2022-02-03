import { useState, useEffect } from 'react';
import { fetchMovie } from '../services/movie-API';
import { NavLink, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import {
  Title,
  CardInfoContainer,
  // MainMovieTitle,
  SecondaryMovieTitle,
  MovieList,
  MovieItem,
  MovieText,
  Img,
} from '../styled/Components.styled';

// const Title = styled.h1`
//   text-align: center;
//   font-size: 28px;
//   margin-bottom: 20px;
//   color: black;
// `;

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieList = async () => {
      await fetchMovie().then(data => setFilms(data.results));
    };
    fetchMovieList();
  }, []);

  return (
    <article>
      <Title>Trending today</Title>
      <MovieList>
        {films.map(({ id, title, name, backdrop_path, vote_count, vote_average }) => (
          <MovieItem key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <Img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt="" />
              <CardInfoContainer>
                <SecondaryMovieTitle>{title ? title : name}</SecondaryMovieTitle>
                <MovieText>Vote: {vote_count}</MovieText>
                <MovieText>Average rating: {vote_average}</MovieText>
              </CardInfoContainer>
            </LinkStyled>
          </MovieItem>
        ))}
      </MovieList>
    </article>
  );
}
