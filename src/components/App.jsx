import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'components/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
import SharedLayout from 'components/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
// const SharedLayout = lazy(() => import('components/SharedLayout'));

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
