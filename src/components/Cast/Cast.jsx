import Loader from 'components/Loader';
import Error from 'components/Error';
import CastItem from 'components/CastItem';
import { Box } from 'common/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from 'api/fetchTheMovieDB';
import { statusList } from 'constants';
import * as SC from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [castDataById, setCastDataById] = useState([]);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMoviesCreditsById = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      setStatus(PENDING);

      try {
        const data = await fetchCreditsById({ movieId });
        setStatus(RESOLVED);
        setCastDataById(data.cast);
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getMoviesCreditsById();
  }, [movieId, setError, setStatus]);

  if (status === statusList.PENDING) {
    return <Loader />;
  }
  if (status === statusList.REJECTED) {
    return <Error error={error} />;
  }
  if (status === statusList.RESOLVED) {
    return (
      <>
        {castDataById.length !== 0 ? (
          <SC.Ul>
            {castDataById.map(({ id, profile_path, name, character }) => {
              return (
                <SC.Li key={id}>
                  <CastItem
                    profile_path={profile_path}
                    name={name}
                    character={character}
                  />
                </SC.Li>
              );
            })}
          </SC.Ul>
        ) : (
          <Box mt={4} mb={4}>
            No information about actors.
          </Box>
        )}
      </>
    );
  }
};

export default Cast;
