import PropTypes from 'prop-types';
import MovieItemCard from './MovieItem';
import { MovieList } from '../../styled/CommonComponents.styled';

// `;
export default function MoviePageCard({ searchFilms }) {
  return (
    <MovieList>
      {/* <MoviePageList> */}
      {searchFilms.map(({ id, title, name, backdrop_path, vote_count, vote_average }) => (
        <MovieItemCard
          key={id}
          title={title}
          name={name}
          backdrop_path={backdrop_path}
          vote_count={vote_count}
          vote_average={vote_average}
        />
      ))}
    </MovieList>
  );
}

MoviePageCard.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string,
      vote_count: PropTypes.number,
      vote_average: PropTypes.number,
    }),
  ),
};
