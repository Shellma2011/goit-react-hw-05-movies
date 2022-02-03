import {
  CardInfoContainer,
  SecondaryMovieTitle,
  MovieList,
  MovieItem,
  MovieText,
  Img,
} from '../../styled/Components.styled';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
`;
export default function MovieListCard({ films }) {
  // const MovieListCard = ({ films }) => (
  const location = useLocation();

  return (
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
  );
}
// export default MovieListCard;
