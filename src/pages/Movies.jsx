import MovieList from 'components/MovieList';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { fetchSearch } from 'api/fetchTheMovieDB';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { statusList } from 'constants';
import { toast } from 'react-toastify';
import * as SC from './Movies.styled';

const Movies = () => {
  const [moviesDataSearch, setMoviesDataSearch] = useState([]);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMoviesSearch = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      if (query.length < 3) {
        return;
      }

      setStatus(PENDING);

      try {
        const data = await fetchSearch({ query, page: 1 });
        setStatus(RESOLVED);
        setMoviesDataSearch(data.results);
        if (!data.total_results) {
          toast.info(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          setSearchParams();
        } else {
          // toast.success(`Hooray! We found ${data.total_results} movies.`);
        }
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getMoviesSearch();
  }, [query, setError, setStatus, setSearchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.query.value.trim().toLowerCase();
    if (searchQuery.length > 2) {
      setSearchParams({ query: searchQuery });
    } else {
      toast.warning('Few characters to search');
      setSearchParams();
    }
  };

  const { PENDING, RESOLVED, REJECTED } = statusList;
  return (
    <Box ml={2} mt={6}>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input type="text" name="query" defaultValue={query} />
        <button type="submit" disabled={status === PENDING}>
          Search
        </button>
      </SC.Form>
      {status === PENDING && <Loader />}
      {status === REJECTED && <Error error={error} />}
      {status === RESOLVED && <MovieList moviesData={moviesDataSearch} />}
    </Box>
  );
};

export default Movies;
