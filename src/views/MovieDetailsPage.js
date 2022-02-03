import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movie-API';

import { BiArrowBack } from 'react-icons/bi';
import { MainMovieTitle, Img } from '../styled/Components.styled';
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
`;

const AboutTitle = styled.h3`
  margin-bottom: 20px;
`;

const GenresTitle = styled.h4`
  margin-bottom: 20px;
`;

const GenresList = styled.ul`
  display: flex;
`;

const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;

const LinkReturn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  /* border: 2px solid black; */
  padding: 10px 40px;
  color: black;
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

const Links = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: 2px solid black;
  padding: 10px 40px;
  color: black;
  font-weight: 500;
  width: 142px;
  border-radius: 5px;
  &.activ {
    color: orange;
  }
  :nth-child(1) {
    margin-right: 16px;
  }
`;

export default function MovieDetailsPage() {
  const [oneFilmObject, setOneFilmObject] = useState({});

  let { moviesId } = useParams();

  const location = useLocation();
  const cameFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = async () => {
      await fetchMovieDetails(moviesId).then(data => {
        setOneFilmObject(data);
      });
    };
    oneMovie();
  }, [moviesId]);

  const { title, vote_average, overview, genres, poster_path } = oneFilmObject;
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
          <Paragraph>User score: {vote_average * 10}%</Paragraph>
          <AboutTitle>Overview </AboutTitle>
          <Paragraph>{overview}</Paragraph>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {genres && genres.map(({ name }) => <GenresItem key={name}>{name}</GenresItem>)}
          </GenresList>
        </FilmInfoContainer>
      </Section>
      <Section>
        <Links to={`/movies/${moviesId}/cast`} state={{ from: cameFrom }}>
          Cast
        </Links>
        <Links to={`/movies/${moviesId}/reviews `} state={{ from: cameFrom }}>
          Reviews
        </Links>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
