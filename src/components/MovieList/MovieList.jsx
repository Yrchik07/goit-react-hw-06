import { NavLink } from 'react-router-dom';

const MovieList = ({ results }) => {
  return (
    <ul>
      {Array.isArray(results) &&
        results.map(({ id, urls, description }) => {
          return (
            <li key={id}>
              <NavLink to="/movies">{description}</NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
