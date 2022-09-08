import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Box } from 'common/Box';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

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
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};
