import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = '18f356f653c6d99c148d4b26445cb32c';

export const fetchMovie = async () => {
  const URL = '3/trending/all/day?api_key=';
  const response = await axios.get(`${URL}${KEY}`);
  return response.data;
};

export const fetchSearchMovie = async search => {
  const URL = '3/search/movie?language=en-US&include_adult=false&api_key=';
  const response = await axios.get(`${URL}${KEY}&query=${search}`);
  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`3/movie/${id}?api_key=${KEY}`);
  return response.data;
};

export const fetchAboutMovie = async (id, about) => {
  const response = await axios.get(`3/movie/${id}/${about}?api_key=${KEY}&language=en-US&page=1`);
  return response.data;
};

fetchSearchMovie.propTypes = {
  search: PropTypes.string.isRequired,
};

fetchMovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchAboutMovie.propTypes = {
  id: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};
