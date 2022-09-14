import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import BackLink from 'components/BackLink';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById, IMG_PATH_W300 } from 'api/fetchTheMovieDB';
import { useState, useEffect } from 'react';
import { statusList } from 'constants';
import * as SC from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDataById, setMovieDataById] = useState(null);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMoviesById = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      setStatus(PENDING);

      try {
        const data = await fetchMovieById({ movieId });
        setStatus(RESOLVED);
        setMovieDataById(data);
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getMoviesById();
  }, [movieId, setError, setStatus]);

  const dateMovie = new Date(movieDataById?.release_date);
  const posterPath = movieDataById?.poster_path
    ? IMG_PATH_W300 + movieDataById?.poster_path
    : 'https://dummyimage.com/240x357/f5f5f5/a6a6a6.jpg&text=No+foto';
  const titleMovie = dateMovie
    ? `${movieDataById?.title} (${dateMovie.getFullYear()})`
    : movieDataById?.title;
  const userScore = Math.trunc(movieDataById?.vote_average * 10);
  const genresMovie = movieDataById?.genres.reduce(
    (accum, genre) => `${accum} ${genre.name}`,
    ''
  );

  if (status === statusList.PENDING) {
    return <Loader />;
  }
  if (status === statusList.REJECTED) {
    return <Error error={error} />;
  }
  if (status === statusList.RESOLVED) {
    return (
      <>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <Box display="flex" gridGap={4} pb={3} mt={2}>
          <SC.Img
            src={posterPath}
            alt={movieDataById?.title}
            width="240"
            height="357"
          />
          <Box display="flex" flexDirection="column" gridGap={5} pt={4}>
            <Title>{titleMovie}</Title>
            <p>User score: {userScore}%</p>
            <Subtitle>Overview</Subtitle>
            <p>{movieDataById?.overview}</p>
            <Subtitle>Genres</Subtitle>
            <p>{genresMovie}</p>
          </Box>
        </Box>
        <SC.Info>
          <p>Additional information</p>
          <SC.List>
            <li>
              <Link to={`cast`} state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`reviews`} state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </SC.List>
        </SC.Info>
        <Outlet />
      </>
    );
  }
};

export default MovieDetails;
