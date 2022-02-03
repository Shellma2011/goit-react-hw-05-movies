import MovieItemCard from './MovieItem';
import { MovieList } from '../../styled/Components.styled';

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
