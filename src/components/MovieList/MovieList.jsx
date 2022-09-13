import MovieItem from 'components/MovieItem';
import * as SC from './MovieList.styled';

const MovieList = ({ moviesData }) => {
  return (
    <SC.Ul>
      {moviesData.length !== 0 &&
        moviesData.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieItem title={title} id={id} />
            </li>
          );
        })}
    </SC.Ul>
  );
};

export default MovieList;
