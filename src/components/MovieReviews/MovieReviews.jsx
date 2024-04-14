import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieDetailsReviews } from '../../services/api'; // Потрібно створити цю функцію в файлі api.js

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await requestMovieDetailsReviews(id);
        setReviews(reviewsData);
      } catch (error) {
        setError('Failed to fetch reviews');
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      {error && <p>{error}</p>}
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
