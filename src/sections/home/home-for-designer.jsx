import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
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
    title: ['Pabbly', 'Connect'],
    description:
      'Effortlessly create automated workflows and seamlessly transfer data between applications.',
    image: 'product-1.svg',
  },
  {
    title: ['Pabbly Email', 'Marketing'],
    description:
      'Experience our simplified email marketing solution for customer and subscriber outreach.',
    image: 'product-2.svg',
  },
  {
    title: ['Pabbly Subscription', 'Billing'],
    description:
      'Recurring billing and subscription management solution with built-in affiliate management.',
    image: 'product-3.svg',
  },
  {
    title: ['Pabbly Form', 'Builder'],
    description:
      'Effortlessly collect payments, leads, surveys, and more with our online form builder.',
    image: 'product-4.svg',
  },
];

// BasicCard component to render individual card
function BasicCard({ title, description, image }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        textAlign: 'center',
        mx: 'auto',
        border: '2px solid transparent', // Initial transparent border
        borderRadius: '8px',
        transition: 'border-color 0.3s ease-in-out', // Animate border color
        '&:hover': {
          borderColor: 'primary.main', // Change the border color on hover
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <CardContent>
        <Box
          component="img"
          alt={title}
          src={`${CONFIG.site.basePath}/assets/icons/home/${image}`}
          sx={{ width: 40, height: 40, mb: 2 }} // Add margin-bottom to space the image from the title
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ ...maxLine({ line: 3, persistent: theme.typography.body1 }), mt: 2, mb: 3 }}
        >
          {title.map((line, index) => (
            <>
              {line}
              {index < title.length - 1 && <br />}{' '}
            </>
          ))}
        </Typography>
        <Typography
          sx={{ ...maxLine({ line: 4, persistent: theme.typography.body1 }), mt: 2, mb: 3 }}
        >
          {description}
        </Typography>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          sx={{
            mt: 'auto',
            transition: 'border-color 0.3s ease-in-out', // Animate border color
            '&:hover': {
              variant: 'contained', // Change the border color on hover
            },
          }} // Auto margin-top to ensure proper alignment
        >
          LEARN MORE
        </Button>
      </CardContent>
    </Card>
  );
}

// Function to render the card data using map
const renderCards = () =>
  cardData.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <BasicCard title={card.title} description={card.description} image={card.image} />
    </Grid>
  ));

// Main section component
const renderDescription = (
  <SectionTitle
    caption="Products"
    title="Pabbly Caters to"
    txtGradient="All Your Business Needs"
    description="Pabbly Plus is a comprehensive business management bundle that addresses all your sales and marketing needs, saving you the hassle of using multiple applications. With Pabbly Plus, you can take care of all your business needs in one place."
    sx={{ mb: 10, textAlign: 'center' }}
  />
);

export function HomeForDesigner({ sx, ...other }) {
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
          <Grid container spacing={3} justifyContent="center">
            {renderCards()} {/* Render cards using the map function */}
          </Grid>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
