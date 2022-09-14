import PropTypes from 'prop-types';
import * as SC from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <SC.BtnLink to={to}>
      &larr;
      {children}
    </SC.BtnLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.object.isRequired,
};
