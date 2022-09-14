import PropTypes from 'prop-types';
import * as SC from './Title.styled';

const Title = ({ children }) => {
  return <SC.H1>{children}</SC.H1>;
};

export default Title;

Title.propTypes = {
  children: PropTypes.any.isRequired,
};
