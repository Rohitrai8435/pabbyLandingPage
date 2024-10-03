import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Container } from '@mui/material';

import { maxLine } from 'src/theme/styles';
import { CONFIG } from 'src/config-global';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';

// Sample data for cards
const cardData = [
  {
    title: 'Business Automations',
    description: 'Automate workflows by connecting multiple apps and services without any coding.',
    image: 'Business-Automations-1.webp',
  },
  {
    title: 'Email Marketing',
    description: 'Send unlimited emails, create and manage effective email campaigns effortlessly.',
    image: 'Email-Marketing.webp',
  },
  {
    title: 'Checkout Pages',
    description: 'Set up customizable and high-converting checkout pages in just a few clicks.',
    image: 'Checkout-Pages-1.webp',
  },
  {
    title: 'Collect One Time Payments',
    description: 'Manage the process of collecting one-time payments to save time and energy.',
    image: 'Collect-One-Time-Payments-1.webp',
  },
  {
    title: 'Collect Recurring Payments',
    description:
      'Manage and automate recurring payments for subscription-based services seamlessly.',
    image: 'Collect-Recurring-Payments-1.webp',
  },
  {
    title: 'Form Builder',
    description: 'Create forms to collect leads, manage submissions, and integrate with apps.',
    image: 'Form-Builder-1.webp',
  },
  {
    title: 'Multi Tier Affiliate Management',
    description: 'Easily create and manage affiliate programs, and automate affiliate payouts.',
    image: 'Affiliate-Management-3.webp',
  },
  {
    title: 'Advanced Reporting',
    description: 'Generate detailed reports to analyze performance and optimize your strategies.',
    image: 'Advanced-Reporting.webp',
  },
  {
    title: 'Unlimited Users',
    description: 'Support unlimited users, perfect for expanding your team or customer base.',
    image: 'Iterator.webp',
  },
];

// BasicCard component to render individual card
function BasicCard({ title, description, image }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mx: 'auto',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for transform and shadow
        '&:hover': {
          boxShadow: theme.shadows[6], // Adds shadow on hover
        },
        borderRadius: 2, // Optional: adds slight border radius to cards
        overflow: 'hidden',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: '10px',
          
          p: 3,
          
        }}
      >
        <Box
          component="img"
          alt={title}
          src={`${CONFIG.site.basePath}/assets/images/home/${image}`}
          sx={{ width: 40, height: 40, display: 'flex', alignItems: 'start' }}
        />
        <Box>
          <Typography variant="h5" component="div" sx={{ mt: 0, mb: 3 }}>
            {title}
          </Typography>
          <Typography
            sx={{ ...maxLine({ line: 3, persistent: theme.typography.body1 }), mt: 0, mb: 3 }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
}

// Function to render the card data using map
const renderCards = () =>
  cardData.map((card, index) => (
    <Grid spacing={2} item xs={12} sm={6} md={4} lg={4} key={index}>
      <BasicCard title={card.title} description={card.description} image={card.image} />
    </Grid>
  ));

// Main section component
const renderDescription = (
  <SectionTitle
    caption="Tools"
    title="All the Business Tools You Need, Now in"
    txtGradient="Pabbly Plus!"
    description="For just ₹3,259, you get access to all Pabbly applications — Pabbly Connect, Pabbly Subscription Billing, Pabbly Email Marketing and Pabbly Form Builder — without any restrictions. No hidden costs. Unlimited features."
    sx={{ mb: 10, textAlign: 'center' }}
  />
);

export function HomeIntegrations({ sx, ...other }) {
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
          <Grid container>{renderCards()}</Grid>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
