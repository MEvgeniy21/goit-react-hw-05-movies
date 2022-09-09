import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Box } from 'common/Box';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import SharedLayout from 'components/SharedLayout';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};
