import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
    slideSpacing: '30px',
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
              sx: { bgcolor: '#CBD0D5', color: '#fff' },
              svgIcon: (
                <path
                  fill="#fff"
                  d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                />
              ),
            },
            nextBtn: {
              sx: { bgcolor: '#CBD0D5', color: 'primary.contrastText' },
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
        }}
      >
        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          fallbackCount={5}
          sx={{ color: '#CBD0D5' }}
        />
      </Box>
    </>
  );
}

function CarouselItem({ item, index }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        objectFit: 'contain',
        
      }}
    >
      {/* Image of the Carousel */}
      <Image visibleByDefault alt={item.title} src={item.coverUrl} ratio="0" />

      {/* Title of the Item */}
      <Typography variant="body1" sx={{ ...maxLine({ line: 2 }), mb: 2, mt: 2 }}>
        {item.title}
      </Typography>

      {/* Centered Pulsating Button */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust to perfectly center the button
        }}
      >
        <PulsatingButton /> {/* Include the PulsatingButton here */}
      </Box>
    </Box>
  );
}

const PulsatingButton = () => {
  const buttonStyle = {
    position: 'relative',
    width: {
      xs: '70px', // Small screen
      sm: '70px', // Small devices
      md: '70px', // Medium devices
      lg: '70px', // Large devices
    },
    height: {
      xs: '70px', // Small screen
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
      xs: '50px', // Small screen
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
      <Button href="https://www.youtube.com/watch?v=z2B7tBxN-ak&t=6s" sx={buttonStyle}>
        <PlayArrowIcon sx={iconStyle} />
      </Button>
    </>
  );
};