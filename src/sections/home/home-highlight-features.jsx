import { Icon } from '@iconify/react';

import { Box, Stack, Button, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

// import { MotionViewport } from 'src/components/animate';

import { _mock } from 'src/_mock';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CarouselDotsNumber } from '../_examples/extra/carousel-view/carousel-dots-number';

// import { CarouselCustoms } from '../_examples/extra/carousel-view/carousel-customs';

const SLIDES = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.course(index),
  description: _mock.description(index),
}));

export function HomeHighlightFeatures({ sx, ...other }) {
  const renderDescription = (
    <SectionTitle
      caption="Tutorials"
      title="Expert Video Tutorials to Guide You!"
      // txtGradient="14,099+ Businesses"
      description="Maximize the benefits of all Pabbly applications for your business with our easy-to-use resources."
      sx={{ mb: 0, textAlign: 'center' }}
    />
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
        pt: 0,
        pb: { xs: 10, md: 10 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <MotionViewport>{renderDescription}</MotionViewport>
        <CarouselDotsNumber data={SLIDES.slice(0, 6)} />
        <Box sx={{paddingTop:"40px"}}>{renderButtons}</Box>
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------
