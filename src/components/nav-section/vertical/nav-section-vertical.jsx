import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { NavUl } from '../styles';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';
// import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export function NavSectionVertical({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
}) {
  const theme = useTheme();

  const cssVars = {
    ...navSectionCssVars.vertical(theme),
    ...overridesVars,
  };

  return (
    <Stack component="nav" className={navSectionClasses.vertical.root} sx={{ ...cssVars, ...sx }}>
      <NavUl sx={{ flex: '1 1 auto', gap: 'var(--nav-item-gap)' }}>
        <Box display="flex" marginLeft="45px">
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontWeight: '700',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#20B276', // Change to your desired hover color
              },
            }}
          >
            Pabbly Plus
          </Typography>
        </Box>
        <Box display="flex" marginLeft="45px">
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontWeight: '700',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#20B276',
              },
            }}
          >
            Pabbly Connect
          </Typography>
        </Box>
        <Box display="flex" marginLeft="45px">
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontWeight: '700',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#20B276',
              },
            }}
          >
            Pabbly Subscription Billing
          </Typography>
        </Box>
        <Box display="flex" marginLeft="45px">
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontWeight: '700',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#20B276',
              },
            }}
          >
            Pabbly Email Verification
          </Typography>
        </Box>
        <Box display="flex" marginLeft="45px">
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontWeight: '700',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#20B276',
              },
            }}
          >
            Pabbly Email Marketing
          </Typography>
        </Box>
      </NavUl>
    </Stack>
  );
}

// ----------------------------------------------------------------------
