import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAboutMovie } from '../../services/movie-API';
import { MovieList, MovieText, Img } from '../../styled/Components.styled';

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
          actors.map(({ character, name, profile_path, id }) => (
            <li key={id}>
              {profile_path ? (
                <Img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="" />
              ) : (
                <Img
                  src={`https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`}
                  alt=""
                  width="300px"
                />
              )}
              <MovieText>{character}</MovieText>
              <MovieText>{name}</MovieText>
            </li>
          ))}
      </MovieList>
    </>
  );
}
