import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { fetchAboutMovie } from '../../services/movie-API';
import { MovieList, MovieText, SecondaryMovieTitle } from '../../styled/CommonComponents.styled';

const Attention = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const ReviewsItem = styled.li`
  /* font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto; */
  width: 280px;
  height: 200px;
  overflow: overlay;
  word-wrap: break-word;
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
        {reviews.map(review => (
          <ReviewsItem key={review.id}>
            <SecondaryMovieTitle>Author</SecondaryMovieTitle>
            {review.author}
            <MovieText>{review.content}</MovieText>
          </ReviewsItem>
        ))}
      </MovieList>
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
