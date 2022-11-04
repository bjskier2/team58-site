/** @jsxImportSource theme-ui */

import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Box, Flex } from 'theme-ui';
import { ReactComponent as RiotCrew } from '../images/riotcrew.svg';

const linkMixin = `
color: #1a1446;
text-decoration: none;
margin: 8px 20px;

&:hover {
  color: #1a1446;
  font-weight: bold;
}

&.active {
  font-weight: bold;
  position: relative;
  &:after {
    content: '';
    position: relative;
    bottom: -10px;
    height: 3px;
    background: #1a1446;
    display: block;
  }
}
`;

const NavItem = styled(NavLink)`
  ${linkMixin}
`;

const Navigation = () => {
  return (
    <Flex
      sx={{
        p: 3,
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: 'lmYellow',
        justifyContent: 'space-between',
        boxShadow: `rgb(0 0 0 / 14%) 0px 2px 4px -0.5px, rgb(0 0 0 / 7%) 0px 4px 5px 0px, rgb(0 0 0 / 6%) 0px 1px 10px 0px;`,
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          flexWrap: 'wrap',
          '@media (max-width:600px)': {
            flexDirection: 'column',
            alignItems: 'start',
          },
        }}
      >
        <Flex
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'lmBlue',
              height: 40,
              verticalAlign: 'middle',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RiotCrew sx={{ height: 40, width: 'auto', marginRight: 2 }} />
            <span sx={{ verticalAlign: 'super' }}>Team 58 Website</span>
          </Link>
        </Flex>
        <Flex>
          <NavItem to="/scouting">Scouting</NavItem>
        </Flex>
      </Flex>
      <Flex sx={{ alignItems: 'center' }}>
        <Box data-for="help-tooltip" data-tip>
          
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navigation;
