import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Unstable_Grid2';

// import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
// import { varAlpha, stylesMode } from 'src/theme/styles';

// import { Iconify } from 'src/components/iconify';
// import { varFade, MotionViewport } from 'src/components/animate';

import { m } from 'framer-motion';

import { varScale, MotionViewport, } from 'src/components/animate';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeMinimal({ sx, ...other }) {
  const renderDescription = (
    <SectionTitle
      caption="Integrations"
      title="A Single Spend for Endless Possibilities with Pabbly"
      // txtGradient="Amazing Team."
      description="Yes, that's correct! Get a Pabbly Plus plan and you will have access to all applications of Pabbly without any feature restrictions."
      sx={{ mb: 10, textAlign: 'center' }}
    />
  );

  const renderImg = (
    <Box
      component="img"
      alt="office-photo-new"
      src={`${CONFIG.site.basePath}/assets/images/home/pabbly-plus-min-1.png`}
      sx={{
        objectFit: 'contain',
        aspectRatio: '0',
        display: { xs: 'none', md: 'flex', sm: 'flex', lg: 'flex' },
      }}
    />
  );
  const renderImgINMobile = (
    <Box
      flexDirection="column"
      sx={{
        display: { xs: 'flex', md: 'none', sm: 'none' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <Box
        component={m.img}
        variants={{ ...varScale().in, initial: { scale: 0.8, opacity: 0 } }}
        src={`${CONFIG.site.basePath}/assets/images/home/zapier-1.png`}
        alt="office-photo-new"
        sx={{
          objectFit: 'contain',
          aspectRatio: '0',
          borderRadius: '10px',
          border: '1px solid #d7dce0',
          bgcolor: '#fffF',
        }}
      />
      <Box
        component="img"
        alt="office-photo-new"
        src={`${CONFIG.site.basePath}/assets/images/home/vs-1.png`}
        sx={{
          objectFit: 'contain',
          aspectRatio: '0',
          width: '80px',
          height: '80px',
        }}
      />
      <Box
        component={m.img}
        variants={{ ...varScale().in, initial: { scale: 0.8, opacity: 0 } }}
        src={`${CONFIG.site.basePath}/assets/images/home/pabbly-1.png`}
        alt="office-photo-new"
        sx={{
          objectFit: 'contain',
          aspectRatio: '0',
        }}
      />
    </Box>
  );

  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
      <Stack alignItems="center" spacing={1}>
        <Button
          href="#"
          color="inherit"
          size="large"
          variant="contained"
          startIcon={<Iconify width={24} icon="mdi:thumb-up-outline" />}
        >
          <span>{`START NOW IT'S FREE`} </span>
        </Button>
        <Container sx={{ display: 'flex', gap: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon
              icon="fa-solid:check"
              width="10px"
              height="10px"
              style={{ color: '#69B897', marginRight: '8px' }}
            />
            <Box>
              {' '}
              <Typography
                variant="body1"
                sx={{ fontWeight: '700', fontSize: { xs: '8px', sm: '10px', md: '10px' } }}
              >
                Trusted by 14,099+ Businesses
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon
              icon="fa-solid:check"
              width="10px"
              height="10px"
              style={{ color: '#69B897', marginRight: '8px' }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: '700', fontSize: { xs: '8px', sm: '10px', md: '10px' } }}
            >
              30-Days Refund Guarantee
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon
              icon="fa-solid:check"
              width="10px"
              height="10px"
              style={{ color: '#69B897', marginRight: '8px' }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: '700', fontSize: { xs: '8px', sm: '10px', md: '10px' } }}
            >
              9,396+ Video Tutorials
            </Typography>
          </Box>
        </Container>
      </Stack>
    </Box>
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 5,
        pb: { xs: 10, md: 10 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        <Container>
          {renderDescription}
          {renderImgINMobile}
          {renderImg}
          <Box sx={{paddingTop:"50px"}}>{renderButtons}</Box>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
