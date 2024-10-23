import { m } from 'framer-motion';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fToNow } from 'src/utils/format-time';

import { _mock } from 'src/_mock';
import { maxLine, varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';

// import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeTestimonials({ sx, ...other }) {
  const theme = useTheme();

  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '40px' },
      [carouselBreakpoints.lg]: { slideSpacing: '64px' },
    },
  });

  const renderDescription = (
    <SectionTitle
      caption="testimonials"
      title="Customers Who Are"
      txtGradient="Trusting Us! "
      description="Non incentivized reviews from real users."
      sx={{ mb: 5, textAlign: 'center' }}
    />
  );

  const horizontalDivider = (position) => (
    <Divider
      component="div"
      sx={{
        width: 1,
        opacity: 0.16,
        height: '1px',
        border: 'none',
        position: 'absolute',
        background: `linear-gradient(to right, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)} 0%, ${theme.vars.palette.grey[500]} 50%, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)} 100%)`,
        ...(position === 'top' && { top: 0 }),
        ...(position === 'bottom' && { bottom: 0 }),
      }}
    />
  );

  const verticalDivider = (
    <Divider
      component="div"
      orientation="vertical"
      flexItem
      sx={{
        opacity: 0.16,
        border: 'none',
        width: '1px',
        background: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)} 0%, ${theme.vars.palette.grey[500]} 50%, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)} 100%)`,
        display: { xs: 'none', md: 'block' },
      }}
    />
  );

  const renderContent = (
    <Stack sx={{ position: 'relative', py: { xs: 5, md: 8 } }}>
      {horizontalDivider('top')}

      <Carousel carousel={carousel}>
        {TESTIMONIALS.map((item) => (
          <Stack key={item.id} component={m.div} variants={varFade().in}>
            <Stack spacing={1} sx={{ typography: 'subtitle2' }}>
              <Rating size="small" name="read-only" value={item.rating} precision={0.5} readOnly />
            </Stack>

            <Typography
              sx={{ ...maxLine({ line: 7, persistent: theme.typography.body1 }), mt: 2, mb: 3 }}
            >
              {item.content}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={item.name} src={item.avatar} sx={{ width: 48, height: 48 }} />
              <Stack sx={{ typography: 'subtitle1' }}>
                <Box component="span">{item.name}</Box>
                <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                  {fToNow(new Date(item.postedAt))}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Carousel>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: { xs: 5, md: 8 } }}
      >
        <CarouselDotButtons
          fallback
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />

        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
      </Stack>
    </Stack>
  );

  const renderNumber = (
    <Stack sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}>
      {horizontalDivider('top')}

      <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} divider={verticalDivider}>
        {[
          { label: 'Trusted by Businesses', value: 14.099 },
          { label: 'Supports Integrations', value: 2000 },
          { label: 'Video Tutorials', value: 9396 },
        ].map((item) => (
          <Stack key={item.label} spacing={2} sx={{ textAlign: 'center', width: 1 }}>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <AnimateCountUp
                to={item.value}
                unit={item.label === 'Trusted by Businesses' ? 'k+' : '+'}
                sx={{
                  fontWeight: 'fontWeightBold',
                  fontSize: { xs: 40, md: 64 },
                  lineHeight: { xs: 50 / 40, md: 80 / 64 },
                  fontFamily: theme.typography.fontSecondaryFamily,
                }}
              />
            </m.div>

            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `90deg, ${theme.vars.palette.text.primary}, ${varAlpha(theme.vars.palette.text.primaryChannel, 0.2)}`
                  ),
                  opacity: 1,
                  typography: 'h6',
                }}
              >
                {item.label}
              </Box>
            </m.div>
          </Stack>
        ))}
      </Stack>

      {horizontalDivider('bottom')}
    </Stack>
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
    <Stack component="section" sx={{ py: 10, position: 'relative', ...sx }} {...other}>
      <Container>
        <MotionViewport>{renderDescription}</MotionViewport>

        {renderContent}
        {renderNumber}
        <Box sx={{paddingTop:"50px"}}>{renderButtons}</Box>
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const base = (index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
});

const TESTIMONIALS = [
  {
    ...base(1),
    category: 'Design Quality',
    content: `I've been using Pabbly for months now & it's really been helping me automate my business from top to bottom. Plus there are a crazy amount of support videos on YouTube created by the Pabbly Team!`,
    postedAt: 'April 20, 2024 23:15:30',
  },
  {
    ...base(2),
    category: 'Design Quality',
    content: `I have been using Pabbly for months now and it can replace Zapier and Integromat in my flows. Highly recommended if you are looking to automate processes. Good luck guys!`,
    postedAt: 'March 19, 2024 23:15:30',
  },
  {
    ...base(3),
    category: 'Code Quality',
    content: `Great product, this is definitely something you would use daily similar to Zapier. Their support team has never failed me and responds actively.`,
    postedAt: 'April 19, 2023 23:15:30',
  },
  {
    ...base(4),
    category: 'Customer Support',
    content: `
Pabbly has become essential to my automation, replacing Zapier and Integromat. Highly recommend it for efficiency! Great job, team!`,
    postedAt: 'May 19, 2023 23:15:30',
  },
  {
    ...base(5),
    category: 'Customer Support',
    content:
      'Pabbly has transformed my business automation, simplifying tasks and streamlining workflows. The YouTube tutorials make it easy to learn. Kudos to the team!',
    postedAt: 'June 19, 2023 23:15:30',
  },
  {
    ...base(6),
    category: 'Design Quality',
    content:
      'Pabbly has been fantastic for my business, automating tasks and saving me hours weekly. The YouTube support videos are a great help. Kudos to the team!',
    postedAt: 'July 19, 2023 23:15:30',
  },
  {
    ...base(7),
    category: 'Code Quality',
    content:
      'Pabbly has been a game-changer, automating workflows and saving me time. The YouTube support videos are super helpful. Thanks, Pabbly team!',
    postedAt: 'August 19, 2023 23:15:30',
  },
  {
    ...base(8),
    category: 'Customizability',
    content:
      'Pabbly has transformed how I manage workflows, automating tasks and saving valuable time. Their YouTube support makes everything simple to learn. Big thanks to the Pabbly team!',
    postedAt: 'September 19, 2023 23:15:30',
  },
];
