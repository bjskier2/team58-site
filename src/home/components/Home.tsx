/** @jsxImportSource theme-ui */

import { Box } from 'theme-ui';
import { usePageTitle } from '../../app/hooks/usePageTitle';
import OldTeam from './OldTeam';

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
      <OldTeam />
    </Box>
    
  );
};
