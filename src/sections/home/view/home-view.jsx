import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomeFooter } from '../Home-fotter';
import { HomeZoneUI } from '../home-zone-ui';
import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';
import { HomeForDesigner } from '../home-for-designer';
import { HomeTestimonials } from '../home-testimonials';
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeHugePackElements } from '../home-hugepack-elements';
import { HomeHighlightFeatures } from '../home-highlight-features';
// import Testing from '../testing';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />
      <BackToTop />
      {/* <Testing/> */}
      <HomeHero />
      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeHugePackElements />
        <HomeForDesigner />
        <HomeMinimal />
        <HomeIntegrations />
        <HomePricing />
        <HomeHighlightFeatures />
        <HomeTestimonials />
        <HomeFAQs />
        <HomeZoneUI />
        <HomeAdvertisement />
        <HomeFooter />
      </Stack>
    </>
  );
}
