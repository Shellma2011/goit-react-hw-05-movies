import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { fetchAboutMovie } from '../../services/movie-API';
import { MovieList, MovieText } from '../../styled/Components.styled';

const Attention = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchAboutMovie(moviesId, 'reviews').then(data => setReviews(data.results));
    };
    fetch();
  }, [moviesId]);

  if (reviews.length === 0) {
    return <Attention>We dont have any reviews for this movie</Attention>;
  }
  return (
    <>
      <MovieList>
        {reviews.map(revie => (
          <li key={revie.id}>
            <MovieText>Author</MovieText>
            {revie.author}
            <MovieText>{revie.content}</MovieText>
          </li>
        ))}
      </MovieList>
    </>
  );
}
