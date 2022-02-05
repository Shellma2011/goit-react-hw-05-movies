import PropTypes from 'prop-types';
import MovieItemCard from './MovieItem';

import { MovieList } from '../../styled/CommonComponents.styled';

export default function MovieHomePageCard({ films }) {
  return (
    <MovieList>
      {films.map(({ id, title, name, backdrop_path, vote_count, vote_average }) => (
        <MovieItemCard
          key={id}
          id={id}
          name={name}
          title={title}
          backdrop_path={backdrop_path}
          vote_count={vote_count}
          vote_average={vote_average}
        />
      ))}
    </MovieList>
  );
}

MovieHomePageCard.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string.isRequired,
      vote_count: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
};
