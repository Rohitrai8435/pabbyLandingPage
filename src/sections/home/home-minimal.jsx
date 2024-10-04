// import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';

// import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
// import { varAlpha, stylesMode } from 'src/theme/styles';

// import { Iconify } from 'src/components/iconify';
// import { varFade, MotionViewport } from 'src/components/animate';

import { MotionViewport } from 'src/components/animate';

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
        
      }}
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
          {renderImg}
        </Container>
      </MotionViewport>
    </Stack>
  );
}
