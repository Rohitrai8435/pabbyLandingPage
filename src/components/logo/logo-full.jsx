// External imports
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'; // Correct import for useMediaQuery
import { useId, forwardRef } from 'react';

// Absolute imports
import { RouterLink } from 'src/routes/components';

// Relative imports
import { logoClasses } from './classes';
import { CONFIG } from '../../config-global';
// ----------------------------------------------------------------------

export const LogoFull = forwardRef(
  ({ disableLink = false, className, href = '/', sx, ...other }, ref) => {
    const theme = useTheme();
    const gradientId = useId();

    // Using useMediaQuery to detect screen size and adjust logo size dynamically
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    // Set dynamic width and height based on screen size
    const logoWidth = isExtraSmallScreen
      ? 60
      : isSmallScreen
        ? 80
        : isMediumScreen
          ? 100
          : isLargeScreen
            ? 150
            : 120; // Default case for other screens

    const logoHeight = isExtraSmallScreen
      ? 40
      : isSmallScreen
        ? 20
        : isMediumScreen
          ? 20
          : isLargeScreen
            ? 100
            : 70; // Corresponding heights for various screens

    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARK = theme.vars.palette.primary.dark;

    const logo = (
      <Box
        alt="logo"
        component="img"
        src={`${CONFIG.site.basePath}/logo/logo-single.svg`}
        width={logoWidth}
        height={logoHeight}
      />
    );

    return (
      <NoSsr
        fallback={
          <Box
            width={logoWidth}
            height={logoHeight}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{
              flexShrink: 0,
              display: 'inline-flex',
              verticalAlign: 'middle',
              ...sx,
            }}
          />
        }
      >
        <Box
          ref={ref}
          component={disableLink ? 'div' : RouterLink} // No link when disableLink is true
          href={!disableLink ? href : undefined}
          width={logoWidth}
          height={logoHeight}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && { pointerEvents: 'none' }),
            ...sx,
          }}
          {...other}
        >
          {logo}
        </Box>
      </NoSsr>
    );
  }
);
