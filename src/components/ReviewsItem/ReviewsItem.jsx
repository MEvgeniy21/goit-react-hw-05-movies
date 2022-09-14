import PropTypes from 'prop-types';
import { Box } from 'common/Box';
import * as SC from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <Box display="flex" flexDirection="column" gridGap={4}>
      <SC.Name>Author: {author}</SC.Name>
      <p>{content}</p>
    </Box>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
