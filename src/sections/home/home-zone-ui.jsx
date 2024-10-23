import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

// import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

// import { Iconify } from 'src/components/iconify';
import { varFade,varScale, MotionViewport,  } from 'src/components/animate';

import { CircleSvg } from './components/svg-elements';
import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeZoneUI({ sx, ...other }) {
  const renderDescription = (
    <SectionTitle
      caption="team"
      title="We Are Proud of Our"
      txtGradient="Amazing Team."
      description="Originally, we were a small team of just 50 people. Over time, our team expanded and now includes more than 100 amazing members, all working together at Pabbly."
      sx={{ mb: 10, textAlign: 'center' }}
    />
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inDown}
      alignItems="center"
      sx={{
        filter: (theme) =>
          `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)})`,
        [stylesMode.dark]: {
          filter: (theme) =>
            `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
        },
      }}
    >
      <Box
        component={m.img}
        variants={{ ...varScale().in, initial: { scale: 0.8, opacity: 0 } }}
        src={`${CONFIG.site.basePath}/assets/images/home/office-photo-new.webp`}
        alt="office-photo-new"
        sx={{
          objectFit: 'contain',
          aspectRatio: '0',
          borderRadius: '16px 16px 16px 16px',
          border: (theme) => `solid 3px ${theme.vars.palette.common.white}`,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      />
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 20,
        pb: { xs: 10, md: 10 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid xs={12} md={6} lg={5}>
          <MotionViewport>{renderDescription}</MotionViewport>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          {renderImg}
        </Grid>
        <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
      </Container>
    </Stack>
  );
}
