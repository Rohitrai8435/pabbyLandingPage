import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { maxLine} from 'src/theme/styles';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  // CarouselArrowBasicButtons,
  CarouselArrowFloatButtons,
  // CarouselArrowNumberButtons,
} from 'src/components/carousel';



// ----------------------------------------------------------------------

export function CarouselDotsNumber({ data }) {
  const carousel = useCarousel({
    loop: true,
    dragFree: true,
    slideSpacing: '20px',
    slidesToShow: { xs: 1, sm: 3, md: 3 },
  });

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Carousel carousel={carousel}>
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>

        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: {
              sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                />
              ),
            },
            nextBtn: {
              sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"
                />
              ),
            },
          }}
        />
      </Box>

      <Box
        gap={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          mt: 2,
          borderRadius: 2,
          bgcolor: 'background.neutral',
        }}
      >
        {/* <CarouselArrowBasicButtons
          {...carousel.arrows}
          options={carousel.options}
          sx={{ color: 'secondary.main' }}
        /> */}

        {/* <CarouselArrowNumberButtons
          {...carousel.arrows}
          options={carousel.options}
          totalSlides={carousel.dots.dotCount}
          selectedIndex={carousel.dots.selectedIndex + 1}
          slotProps={{
            prevBtn: {
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                />
              ),
            },
            nextBtn: {
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"
                />
              ),
            },
          }}
          sx={{ bgcolor: 'info.main', color: 'info.contrastText' }}
        /> */}

        {/* <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          fallbackCount={5}
          sx={{ color: 'primary.main' }}
        /> */}

        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          fallbackCount={5}
          sx={{ color: 'primary.main' }}
        />

        {/* <CarouselDotButtons
          variant="number"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          fallbackCount={5}
          slotProps={{
            dot: {
              selected: {
                bgcolor: 'warning.main',
                color: 'warning.contrastText',
              },
            },
          }}
        /> */}
      </Box>
    </>
  );
}

function CarouselItem({ item, index }) {
  const theme = useTheme();

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' ,objectFit:"contain"}}>
      <Image visibleByDefault alt={item.title} src={item.coverUrl} ratio="0" />
      <Typography variant="body1" sx={{ ...maxLine({ line: 2 }), mb: 2,mt:2 }}>
        {item.title}
      </Typography>
    </Box>
  );
}
