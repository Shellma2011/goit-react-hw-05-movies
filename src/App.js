import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Navigation/Navigation';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "HomePage-view" */));
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage-view" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage-view" */),
);
const Cast = lazy(() => import('./components/Cast/Cast' /* webpackChunkName: "Cast-view" */));
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews' /* webpackChunkName: "Reviews-view" */),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "NotFoundView-view" */),
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
