import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from 'components/MovieInfo';
import MovieCredits from 'components/MovieCredits';
import NotFound from 'pages/NotFound';
import SharedLayout from 'components/SharedLayout';
// import { useState } from 'react';

// const statusList = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export const App = () => {
  // const [status, setStatus] = useState(statusList.IDLE);
  // const [error, setError] = useState('');

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
              // statusList={statusList}
              // status={status}
              // setStatus={setStatus}
              // error={error}
              // setError={setError}
              />
            }
          />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <MovieInfo
              // statusList={statusList}
              // status={status}
              // setStatus={setStatus}
              // error={error}
              // setError={setError}
              />
            }
          >
            <Route
              path="cast"
              element={
                <MovieCredits
                // statusList={statusList}
                // status={status}
                // setStatus={setStatus}
                // error={error}
                // setError={setError}
                />
              }
            />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
