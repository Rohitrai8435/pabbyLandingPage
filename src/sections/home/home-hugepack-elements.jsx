import { Stack, Container } from '@mui/material';

import { _mock } from 'src/_mock';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CarouselAutoScroll } from '../_examples/extra/carousel-view/carousel-auto-scroll';

// ----------------------------------------------------------------------
const SLIDES = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));
export function HomeHugePackElements({ sx, ...other }) {
  const renderDescription = (
    <SectionTitle
      caption="Trusted"
      title="Pabbly is Trusted By Over"
      txtGradient="14,099+ Businesses"
      description="Originally, we were a small team of just 50 people. Over time, our team expanded and now includes more than 100 amazing members, all working together at Pabbly."
      sx={{ mb: 5, textAlign: 'center' }}
    />
  );
  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        pb: { xs: 10, md: 10 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        <Container>
          {renderDescription}
          <CarouselAutoScroll data={SLIDES.slice(0, 8)} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------
