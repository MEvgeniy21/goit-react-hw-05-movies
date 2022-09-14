import MovieList from 'components/MovieList';
import Title from 'components/Title';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { fetchTrend } from 'api/fetchTheMovieDB';
import { useState, useEffect } from 'react';
import { statusList } from 'constants';

export default function Home() {
  const [moviesDataTrend, setMoviesDataTrend] = useState([]);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMoviesTrend = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      setStatus(PENDING);

      try {
        const data = await fetchTrend({ page: 1 });
        setStatus(RESOLVED);
        setMoviesDataTrend(data.results);
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getMoviesTrend();
  }, [setError, setStatus]);

  if (status === statusList.PENDING) {
    return <Loader />;
  }
  if (status === statusList.REJECTED) {
    return <Error error={error} />;
  }
  if (status === statusList.RESOLVED) {
    return (
      <>
        <Box pt={4} pb={5}>
          <Title>Trending today</Title>
        </Box>
        <MovieList moviesData={moviesDataTrend} />
      </>
    );
  }
}
