import { useState, useEffect, useLayoutEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../services/movie-API';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

import MoviePageCard from '../components/MoviesListCard/MoviePageCard';

import { Form, FormInput, SearchBtn } from '../styled/CommonComponents.styled';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

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

        <SearchBtn type="submit">
          <FaSearch fill="#191970" />
        </SearchBtn>
      </Form>
      <Outlet />
      {searchFilms && <MoviePageCard searchFilms={searchFilms} />}
    </>
  );
}
