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
