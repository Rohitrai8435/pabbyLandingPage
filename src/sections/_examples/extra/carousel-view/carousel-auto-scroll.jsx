import AutoScroll from 'embla-carousel-auto-scroll';

import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import { Carousel, useCarousel} from 'src/components/carousel';


// ----------------------------------------------------------------------

export function CarouselAutoScroll({ data }) {
  const carousel = useCarousel(
    {
      loop: true,
    },
    [AutoScroll({ playOnInit: true })]
  );
  return (
      <Box sx={{ position: 'relative' }}>
        <Carousel carousel={carousel} sx={{ borderRadius: 2 }}>
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>
      </Box>
  );
}

function CarouselItem({ item, index }) {
  return (
    <Box sx={{ position: 'relative' }}>
    
      <Image
        visibleByDefault
        alt={item.title}
        src={item.coverUrl}
        ratio={{ xs: '4/3', sm: '16/10' }}
      />
    </Box>
  );
}
