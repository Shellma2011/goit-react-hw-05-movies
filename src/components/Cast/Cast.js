import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAboutMovie } from '../../services/movie-API';
import { MovieList, MovieText, SecondaryMovieTitle } from '../../styled/CommonComponents.styled';
import styled from 'styled-components';

const ImgCast = styled.img`
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  width: 292px;
  :hover,
  :focus {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchAboutMovie(moviesId, 'credits').then(data => setActors(data.cast));
    };
    fetch();
  }, [moviesId]);

  return (
    <>
      <MovieList>
        {actors &&
          actors.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <ImgCast src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="" />
              ) : (
                <ImgCast
                  src={`https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`}
                  alt=""
                  width="300px"
                />
              )}
              <SecondaryMovieTitle>{character}</SecondaryMovieTitle>
              <MovieText>{name}</MovieText>
            </li>
          ))}
      </MovieList>
    </>
  );
}

Cast.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    }),
  ),
};
