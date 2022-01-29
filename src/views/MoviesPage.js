import { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../services/movie-API';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import {
  MovieList,
  MovieItem,
  MovieText,
  Img,
  Form,
  FormInput,
  FormButtonLabel,
  Button,
} from '../styled/Components.styled';

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    if (searchParam.has('query')) {
      setSearchSubmit(searchParam.get('query'));
    }
    return () => {
      setSearchFilms([]);
    };
  }, [searchParam]);

  useLayoutEffect(() => {
    if (searchSubmit === '') {
      return;
    }
    const searchFilm = async () => {
      await fetchSearchMovie(searchSubmit).then(data => setSearchFilms(data.results));
    };
    searchFilm();
  }, [searchSubmit]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchSubmit(search);

    if (search === '') {
      toast.error('Enter what you want to find');
      return;
    }

    setSearchParam({ query: search });
    setSearch('');
  };

  return (
    <>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <FormInput onChange={handleSearch} value={search} />

        <Button type="submit">
          <FaSearch />
          <FormButtonLabel>Search</FormButtonLabel>
        </Button>
      </Form>
      <Outlet />
      {searchFilms && (
        <MovieList>
          {searchFilms.map(({ id, title, name, backdrop_path, vote_count, vote_average }) => (
            <MovieItem key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <MovieText>{title ? title : name}</MovieText>

                <Img
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
                      : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`
                  }
                  alt=""
                />

                <MovieText>Vote: {vote_count}</MovieText>
                <MovieText>Average rating: {vote_average}</MovieText>
              </LinkStyled>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
}
