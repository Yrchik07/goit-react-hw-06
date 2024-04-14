import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import clsx from 'clsx';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(
  () => import('./pages/MovieDetailsPage/MovieDetailsPage'),
);

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const App = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
