import Loader from 'components/Loader';
import Error from 'components/Error';
import ReviewsItem from 'components/ReviewsItem';
import { Box } from 'common/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'api/fetchTheMovieDB';
import { statusList } from 'constants';
import * as SC from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsDataById, setReviewsDataById] = useState([]);
  const [status, setStatus] = useState(statusList.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    const getReviewsById = async () => {
      const { PENDING, RESOLVED, REJECTED } = statusList;

      setStatus(PENDING);

      try {
        const data = await fetchReviewsById({ movieId, page: 1 });
        setStatus(RESOLVED);
        setReviewsDataById(data.results);
      } catch (error) {
        setStatus(REJECTED);
        setError(error.message);
      }
    };

    getReviewsById();
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
        {reviewsDataById.length !== 0 ? (
          <SC.Ul>
            {reviewsDataById.map(({ id, author, content }) => {
              return (
                <SC.Li key={id}>
                  <ReviewsItem author={author} content={content} />
                </SC.Li>
              );
            })}
          </SC.Ul>
        ) : (
          <Box mt={4}>We don't have any reviews for this movie.</Box>
        )}
      </>
    );
  }
};

export default Reviews;
