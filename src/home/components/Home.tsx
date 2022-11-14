/** @jsxImportSource theme-ui */

import { Box } from 'theme-ui';
import { usePageTitle } from '../../app/hooks/usePageTitle';
import Team from './Team';

export const Home = () => {
  usePageTitle();
  return (
    <Box
      sx={{
        overflow: 'auto',
        position: 'relative',
        a: { textDecoration: 'none' },
        'a[href]': { cursor: 'pointer' },
      }}
    >
      <Team />
    </Box>
    
  );
};
