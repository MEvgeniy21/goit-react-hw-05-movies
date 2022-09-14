import { Box } from 'common/Box';
import { RotatingLines } from 'react-loader-spinner';
import { theme } from 'theme';

export default function Loader() {
  return (
    <Box pt={6} pl={6}>
      <RotatingLines
        strokeColor={theme.colors.load}
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
}
