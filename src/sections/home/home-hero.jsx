import { useRef } from 'react';
import { m } from 'framer-motion';
import { Icon } from '@iconify/react'; // Use Iconify without importing specific icons
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();
  const mdUp = useResponsive('up', mdKey);

  const renderHeading = (
    <Box
      component="h1"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        ...theme.typography.h2,
        my: 0,
        mx: 'auto',
        fontFamily: theme.typography.fontSecondaryFamily,
        [theme.breakpoints.up(lgKey)]: { fontSize: 54, lineHeight: '1.3em' },
      }}
    >
      <Box sx={{ width: 1, opacity: 0.50 }}>Powerful Applications to Scale &</Box>
      Grow Your
      <Box
        component="span"
        sx={{
          ...textGradient(
            `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
          ),
          backgroundSize: '400%',
          ml: { xs: 0.75, md: 1, xl: 1.5 },
        }}
      >
        Business
      </Box>
    </Box>
  );

  const renderText = (
    <Typography
      variant="body2"
      sx={{
        mx: 'auto',
        [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
        [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
      }}
    >
      {`Get access to business-critical applications like form creation, email marketing, billing,\nautomation, and many other enhanced features at just one single price.`}
    </Typography>
  );

  const featureList = (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        gap: { xs: '10px', sm: '10px', md: '150px', lg: '150px' }, // Responsive gap
        justifyContent: 'space-between',
      }}
    >
      {/* Left Column */}
      <Box display="flex" alignItems="start" flexDirection="column" gap="10px">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', md: '15px', lg: '15px' } }}
          >
            No Technical Expertise Needed
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', lg: '15px' } }}
          >
            Seamlessly Intuitive for Everyone
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', lg: '15px' } }}
          >
            Supports All Businesses
          </Typography>
        </Box>
      </Box>

      {/* Right Column */}
      <Box display="flex" alignItems="start" flexDirection="column" gap="10px">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', lg: '15px' } }}
          >
            All Pabbly Apps in One Place
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', lg: '15px' } }}
          >
            Built-In Security and Reliability
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="fa-solid:check"
            width="14px"
            height="14px"
            style={{ color: '#007BFF', marginRight: '8px' }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', fontSize: { xs: '12px', sm: '12px', md: '15px' } }}
          >
            Top-Tier SOC2 Certified Security
          </Typography>
        </Box>
      </Box>
    </Container>
  );

  const renderRatings = (
    <Box display="flex" gap="50px" flexWrap="wrap" alignItems="center" justifyContent="center">
      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ typography: 'subtitle2' }}
      >
        <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
          {[...Array(3)].map((_, index) => (
            <Avatar
              key={_mock.fullName(index + 1)}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </AvatarGroup>
        <Typography textAlign="center" variant="p">
          160+ Happy customers
        </Typography>
      </Box>
    </Box>
  );
  const renderRatings1 = (
    <Box
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
      sx={{ gap: { xs: '10px', md: '10px', lg: '20px', sm: '10px' } }}
    >
      {/* Trusted by Businesses */}
      <Box
        gap={1.5}
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          typography: 'subtitle2',
          border: '1px solid rgba(0, 0, 0, 0.1)', // Adding border

          borderRadius: '8px', // Rounded corners
          padding: { xs: '10px', sm: '10px', md: '10px', lg: '10px' },
          width: { xs: '120px', sm: '250px' }, // Set width to ensure consistent size
          height: { xs: '120px', sm: '80px', md: '80px', lg: '80px' },
        }}
      >
        <AvatarGroup
          sx={{
            [`& .${avatarClasses.root}`]: {
              width: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
              height: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
            },
          }}
        >
          <Avatar alt={_mock.fullName(1)} src={_mock.image.trust(1)} />
        </AvatarGroup>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
            textAlign: { xs: 'center', sm: 'start' },
          }}
        >
          Trusted by 14,099+ Businesses
        </Typography>
      </Box>

      {/* Supports Integrations */}
      <Box
        gap={1.5}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          typography: 'subtitle2',
          border: '1px solid rgba(0, 0, 0, 0.1)', // Adding border
          borderRadius: '8px', // Rounded corners
          padding: { xs: '10px', sm: '10px', md: '10px', lg: '10px' },
          width: { xs: '120px', sm: '200px', md: '250px', lg: '250px' },
          height: { xs: '120px', sm: '80px', md: '80px', lg: '80px' },
        }}
      >
        <AvatarGroup
          sx={{
            [`& .${avatarClasses.root}`]: {
              width: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
              height: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
            },
          }}
        >
          <Avatar alt={_mock.fullName(2)} src={_mock.image.support(1)} />
        </AvatarGroup>
        <Typography
          textAlign="start"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
            textAlign: { xs: 'center', sm: 'start', md: 'start', lg: 'start' },
          }}
        >
          Supports 2,000+ Integrations
        </Typography>
      </Box>

      {/* Video Tutorials */}
      <Box
        gap={1.5}
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          typography: 'subtitle2',
          border: '1px solid rgba(0, 0, 0, 0.1)', // Adding border
          borderRadius: '8px', // Rounded corners
          padding: { xs: '10px', sm: '10px', md: '10px', lg: '10px' },
          width: { xs: '120px', sm: '200px', md: '250px', lg: '250px' },
          height: { xs: '120px', sm: '80px', md: '80px', lg: '80px' },
        }}
      >
        <AvatarGroup
          sx={{
            [`& .${avatarClasses.root}`]: {
              width: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
              height: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
            },
          }}
        >
          <Avatar alt={_mock.fullName(2)} src={_mock.image.play(1)} />
        </AvatarGroup>
        <Typography
          textAlign="start"
          variant="body1"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
            textAlign: { xs: 'center', sm: 'start', md: 'start', lg: 'start' },
          }}
        >
          9,396+ Video <br /> Tutorials
        </Typography>
      </Box>
    </Box>
  );


  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
      <Stack alignItems="center" spacing={2.5}>
        <Button
          component={RouterLink}
          href={paths.dashboard.root}
          color="inherit"
          size="large"
          variant="contained"
          startIcon={<Iconify width={24} icon="mdi:thumb-up-outline" />}
        >
          <span>{`START NOW IT'S FREE`} </span>
        </Button>
      </Stack>
    </Box>
  );
  // Styled component for the pulsating effect

  const renderImg = (
    <Stack
      alignItems="center"
      justifyContent="center" // This centers the content vertically
      sx={{ position: 'relative', height: '100%' }} // Ensures the stack takes full height for proper centering
    >
      <Box
        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <PulsatingButton />
      </Box>

      <Box
        component="img"
        alt="Pabbly-Plus-Video-Cover-new1"
        src={`${CONFIG.site.basePath}/assets/images/home/Pabbly-Plus-Video-Cover-new1-min.webp`}
        sx={{
          objectFit: 'contain',
          aspectRatio: '0',
          borderRadius: '16px',
          border: '2px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      />
    </Stack>
  );

  return (
    <Stack
      ref={useRef(null)}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up(mdKey)]: {
          minHeight: 800,
          maxHeight: 1440,
          display: 'block',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          [theme.breakpoints.up(mdKey)]: {
            height: 1,
          },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 10,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <MInview>
              <MotionViewport>
                {renderHeading}
                {renderText}
              </MotionViewport>
            </MInview>
          </Stack>
          <MInview>{renderImg}</MInview>
          <MInview>{featureList}</MInview>

          <MInview>{renderRatings}</MInview>
          <MInview>{renderButtons}</MInview>
          <MInview>{renderRatings1}</MInview>
        </Container>
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function MInview({ children, component = m.div }) {
  return (
    <Box component={component} variants={varFade({ distance: 24 }).inUp}>
      {children}
    </Box>
  );
}
const PulsatingButton = () => {
  const theme = useTheme();

  const buttonStyle = {
    position: 'relative',
    width: {
      xs: '60px', // Small screen
      sm: '70px', // Small devices
      md: '70px', // Medium devices
      lg: '70px', // Large devices
    },
    height: {
      xs: '60px', // Small screen
      sm: '70px', // Small devices
      md: '70px', // Medium devices
      lg: '70px', // Large devices
    },
    borderRadius: '50%',
    backgroundColor: '#0084ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: 'none',
    animation: 'pulse 2s infinite',
    '&:hover': {
      backgroundColor: '#0084ff', // Prevent color change on hover
      boxShadow: 'none', // Prevent shadow change on hover if any
    },
  };

  const iconStyle = {
    color: 'white',
    fontSize: {
      xs: '45px', // Small screen
      sm: '50px', // Small devices
      md: '50px', // Medium devices
      lg: '50px', // Large devices
    },
  };

  const pulseKeyframes = `
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 132, 255, 0.7);
      }
      70% {
        box-shadow: 0 0 0 30px rgba(0, 132, 255, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 132, 255, 0);
      }
    }
  `;

  return (
    <>
      <style>{pulseKeyframes}</style> {/* Keyframe animation injected in the style tag */}
      <Button href="https://www.youtube.com/watch?v=CoIfgN0tfhE&t=5s" sx={buttonStyle}>
        <PlayArrowIcon sx={iconStyle} />
      </Button>
    </>
  );
};
