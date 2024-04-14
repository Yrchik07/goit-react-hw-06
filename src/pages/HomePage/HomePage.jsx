import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { NavLink, useLocation } from 'react-router-dom';
import { requestMoviesByTrending } from '../../services/api';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await requestMoviesByTrending();
        setResults(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsError(false);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {Array.isArray(results) &&
        results.map(result => {
          return (
            <li key={result.id}>
              <NavLink state={location} to={`/movie/${result.id}`}>
                {result.title}
              </NavLink>
            </li>
          );
        })}
    </div>
  );
};

export default HomePage;
