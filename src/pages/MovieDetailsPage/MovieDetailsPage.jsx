import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  useParams,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { requestMovieDetailsById } from '../../services/api';

const Loader = lazy(() => import('../../components/Loader/Loader'));
const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(
  () => import('../../components/MovieReviews/MovieReviews'),
);

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsData = await requestMovieDetailsById(id);

        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Failed to get a movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <Link to={backLinkRef.current}>⬅ Go back</Link>
          <section className={css.movieDetails}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <ul>
              <li>
                <h2>
                  {movieDetails.title} ({movieDetails.release_date})
                </h2>
                <p>User score: {movieDetails.vote_average}</p>
              </li>
              <li>
                <h3>Overview </h3>
                <p>{movieDetails.overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
            </Suspense>
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
