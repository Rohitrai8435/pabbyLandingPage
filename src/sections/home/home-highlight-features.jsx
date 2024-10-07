import { Stack, Container } from '@mui/material';

// import { MotionViewport } from 'src/components/animate';

import { _mock } from 'src/_mock';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title'; import { CarouselDotsNumber } from '../_examples/extra/carousel-view/carousel-dots-number';
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
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------
