import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as SC from './SharedLayout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const SharedLayout = () => {
  return (
    <Box ml={2} mt={6}>
      <SC.Header>
        <SC.Nav>
          {navItems.map(({ href, text }) => (
            <SC.Link key={href} to={href}>
              {text}
            </SC.Link>
          ))}
        </SC.Nav>
      </SC.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
