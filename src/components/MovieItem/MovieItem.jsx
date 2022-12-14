import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      {title}
    </Link>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
