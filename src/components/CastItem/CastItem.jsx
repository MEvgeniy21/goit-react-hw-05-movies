import PropTypes from 'prop-types';
import { Box } from 'common/Box';
import { IMG_PATH_W200 } from 'api/fetchTheMovieDB';
import * as SC from './CastItem.styled';

const CastItem = ({ profile_path, name, character }) => {
  const profilePath = profile_path
    ? IMG_PATH_W200 + profile_path
    : 'https://dummyimage.com/100x150/f5f5f5/a6a6a6.jpg&text=No+foto';
  return (
    <Box display="flex" flexDirection="column" gridGap={4}>
      <SC.Img
        src={profilePath}
        alt={name}
        width="100"
        height="150"
        loading="lazy"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </Box>
  );
};

export default CastItem;

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
