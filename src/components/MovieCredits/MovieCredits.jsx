import Loader from 'components/Loader';
import Error from 'components/Error';
import { Box } from 'common/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from 'api/fetchTheMovieDB';
import { statusList } from 'constants';

const MovieCredits = () => {
  const { movieId } = useParams();

  const [movieCreditsDataById, setMovieCreditsDataById] = useState(null);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMoviesCreditsById = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      setStatus(PENDING);

      try {
        const data = await fetchCreditsById({ movieId });
        setStatus(RESOLVED);
        setMovieCreditsDataById(data);
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getMoviesCreditsById();
  }, [movieId, setError, setStatus]);

  console.log(status);
  console.log(movieCreditsDataById);

  if (status === statusList.PENDING) {
    return (
      <Box pt={6} pl={6}>
        <Loader />
      </Box>
    );
  }
  if (status === statusList.REJECTED) {
    return <Error error={error} />;
  }
  if (status === statusList.RESOLVED) {
    return <div>Credits</div>;
  }
};

export default MovieCredits;
