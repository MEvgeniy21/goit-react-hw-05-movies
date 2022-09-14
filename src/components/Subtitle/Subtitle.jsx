import PropTypes from 'prop-types';
import * as SC from './Subtitle.styled';

const Subtitle = ({ children }) => {
  return <SC.H2>{children}</SC.H2>;
};

export default Subtitle;

Subtitle.propTypes = {
  children: PropTypes.any.isRequired,
};