import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Container } from '@mui/material';

import { maxLine } from 'src/theme/styles';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
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
// function BasicCard({ title, description, image }) {
//   const theme = useTheme();
//   return (
//     <Card
//       sx={{
//         textAlign: 'center',
//         mx: 'auto',
//         border: '2px solid transparent', // Initial transparent border
//         borderRadius: '8px',
//         transition: 'border-color 0.3s ease-in-out', // Animate border color
//         '&:hover': {
//           borderColor: 'primary.main', // Change the border color on hover
//           boxShadow: theme.shadows[6],
//         },
//       }}
//     >
//       <CardContent>
//         <Box
//           component="img"
//           alt={title}
//           src={`${CONFIG.site.basePath}/assets/icons/home/${image}`}
//           sx={{ width: 40, height: 40, mb: 2 }} // Add margin-bottom to space the image from the title
//         />
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{ ...maxLine({ line: 3, persistent: theme.typography.body1 }), mt: 2, mb: 3 }}
//         >
//           {title.map((line, index) => (
//             <>
//               {line}
//               {index < title.length - 1 && <br />}{' '}
//             </>
//           ))}
//         </Typography>
//         <Typography
//           sx={{ ...maxLine({ line: 4, persistent: theme.typography.body1 }), mt: 2, mb: 3 }}
//         >
//           {description}
//         </Typography>
//         <Button
//           color="inherit"
//           size="large"
//           variant="outlined"
//           sx={{
//             mt: 'auto',
//             transition: 'border-color 0.3s ease-in-out', // Animate border color
//             '&:hover': {
//               variant: 'contained', // Change the border color on hover
//             },
//           }} // Auto margin-top to ensure proper alignment
//         >
//           LEARN MORE
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }
function BasicCard({ title, description, image }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        textAlign: 'center',
        mx: 'auto',
        border: '2px solid transparent', // Initial transparent border
        borderRadius: '12px', // Slightly more rounded corners for a smoother look
        transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out', // Add a hover scale effect
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'scale(1.05)', // Slight zoom on hover
          boxShadow: theme.shadows[8], // Stronger shadow for depth
        },
        overflow: 'hidden', // Ensure the card content doesn't spill out
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          p: 3,
        }}
      >
 
          <Box
            component="img"
            alt={title}
            src={`${CONFIG.site.basePath}/assets/icons/home/${image}`}
            sx={{
              width: 60,
              height: 60,
              mb: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.1)' }, // Add a subtle image rotation and zoom effect
            }}
          />
       
        <Typography
          variant="h5"
          component="div"
          sx={{
            ...maxLine({ line: 3, persistent: theme.typography.body1 }),
            mt: 2,
            mb: 2,
            fontWeight: 'bold', // Emphasize title
            color: 'primary.main', // Make the title more eye-catching
          }}
        >
          {title.map((line, index) => (
            <Box key={index}>
              {line}
              {index < title.length - 1 && <br />}
            </Box>
          ))}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ...maxLine({ line: 4, persistent: theme.typography.body1 }),
            color: theme.palette.text.secondary,
            mb: 3,
          }}
        >
          {description}
        </Typography>
        <Button
          color="primary"
          size="large"
          variant="outlined"
          sx={{
            px: 4, // Add horizontal padding for a larger button
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: '30px', // Rounder button for a modern look
            transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.primary.main, // Change button color on hover
              transform: 'scale(1.1)', // Enlarge button slightly on hover
              color: '#ffff',
            },
          }}
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
    sx={{ mb: 5, textAlign: 'center' }}
  />
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

export function HomeForDesigner({ sx, ...other }) {
  return (
    <Stack
      component="section"
      sx={{
        pt: 5,
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
          <Box sx={{paddingTop:"50px"}}>{renderButtons}</Box>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
