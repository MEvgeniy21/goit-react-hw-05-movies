import { Box } from 'common/Box';
import { Outlet } from 'react-router-dom';
import * as SC from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Box ml={2} mt={6}>
      <SC.Header>
        <SC.Nav>
          <SC.Link to="/">Home</SC.Link>
          <SC.Link to="/movies">Movies</SC.Link>
        </SC.Nav>
      </SC.Header>
      <Outlet />
    </Box>
  );
};

export default SharedLayout;
