import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movie-API';

import { BiArrowBack } from 'react-icons/bi';
import { MainMovieTitle, Img, SecondaryMovieTitle } from '../styled/CommonComponents.styled';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  margin-top: 15px;
`;

const FilmInfoContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;
const Paragraph = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: #191970;
`;

const GenresList = styled.ul`
  display: flex;
  font-size: 14px;
  color: #191970;
`;

const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;

const LinkReturn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 10px 40px;
  color: #191970;
  font-weight: 500;
  width: 300px;
  border-radius: 5px;
  &.activ {
    color: orange;
  }
  :nth-child(1) {
    margin-right: 16px;
  }
`;

const LinkCast = styled(NavLink)`
  height: 45px;
  padding: 10px 30px;
  margin-right: 15px;
  border-radius: 25px;
  text-decoration: none;
  color: #4682b4;
  border: 1px solid #4682b4;
  &.active {
    color: #e0ffff;
    border: 2px solid #e0ffff;
    background-color: #4169e1;
  }
`;
const LinkRewiews = styled(NavLink)`
  height: 45px;
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 25px;
  text-decoration: none;
  color: #4682b4;
  border: 1px solid #4682b4;
  &.active {
    color: #e0ffff;
    border: 2px solid #e0ffff;
    background-color: #4169e1;
  }
`;

export default function MovieDetailsPage() {
  const [oneFilmObj, setOneFilmObj] = useState({});

  let { moviesId } = useParams();

  const location = useLocation();
  const cameFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = () => {
      fetchMovieDetails(moviesId).then(data => {
        setOneFilmObj(data);
      });
    };
    oneMovie();
  }, [moviesId]);

  const { title, vote_average, overview, genres, poster_path } = oneFilmObj;
  return (
    <>
      <LinkReturn to={cameFrom}>
        <BiArrowBack />
        Return to movies
      </LinkReturn>
      <Section>
        <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        <FilmInfoContainer>
          <MainMovieTitle>{title}</MainMovieTitle>
          <SecondaryMovieTitle>User score: {vote_average * 10}%</SecondaryMovieTitle>
          <SecondaryMovieTitle>Genres:</SecondaryMovieTitle>
          <GenresList>
            {genres && genres.map(({ name }) => <GenresItem key={name}>{name}</GenresItem>)}
          </GenresList>
          <SecondaryMovieTitle>Overview </SecondaryMovieTitle>
          <Paragraph>{overview}</Paragraph>
        </FilmInfoContainer>

        <LinkCast to={`/movies/${moviesId}/cast`} state={{ from: cameFrom }}>
          Cast
        </LinkCast>
        <LinkRewiews to={`/movies/${moviesId}/reviews`} state={{ from: cameFrom }}>
          Reviews
        </LinkRewiews>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
