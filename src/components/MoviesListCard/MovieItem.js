import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  CardInfoContainer,
  SecondaryMovieTitle,
  MovieItem,
  MovieText,
  Img,
} from '../../styled/CommonComponents.styled';

const LinkStyled = styled(NavLink)`
  text-decoration: none;
`;
export default function MovieItemCard({
  id,
  title,
  name,
  backdrop_path,
  vote_count,
  vote_average,
}) {
  const location = useLocation();

  return (
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
  );
}

MovieItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  backdrop_path: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
};
