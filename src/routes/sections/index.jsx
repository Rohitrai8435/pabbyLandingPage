import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Box,Button, Typography  } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { MainLayout } from 'src/layouts/main';
// import { useTheme } from '@mui/material/styles';
// import { Iconify } from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const PromoBanner = () => (
  <Box
    sx={{
      background: 'radial-gradient(circle, #ffffff, #d1e6df, #b0c9bf)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: {
        xs: 'column', // Stack items on small screens
        sm: 'row', // Horizontal layout on small screens and above
      },
      textAlign: {
        xs: 'center', // Center text on small screens
        sm: 'left', // Left-align text on medium screens and above
      },
      padding: {
        xs: '20px 10px', // Increase padding for small screens
        sm: '10px 20px', // Regular padding for medium screens and above
      },
      borderRadius: '5px',
    }}
  >
    {/* Left section */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: {
          xs: 'column', // Stack icon and text on small screens
          sm: 'row', // Horizontal layout on medium screens and above
        },
        marginBottom: { xs: '10px', sm: '0' }, // Space below on small screens
      }}
    >
      <Box sx={{ display: { xs: 'none' } }}>
        <AccessTimeIcon
          sx={{
            fontSize: { xs: '25px', md: '30px', sm: '25px' },
            marginRight: { xs: '0', sm: '10px' }, // Remove margin for small screens
            marginBottom: { xs: '10px', sm: '0' }, // Space below icon on small screens
          }}
        />
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 'bold',
            marginRight: { xs: '0', sm: '10px' }, // Adjust margin based on screen size
          }}
        >
          LIMITED OFFER
        </Typography>
      </Box>
      <Typography variant="body1" component="span">
        👉<b>DON’T MISS OUT</b>- Get Extra 5% Discount on Pabbly Plus (Yearly Plan)! Code:
        <span style={{ fontWeight: '900', textDecoration: 'underline' }}> EXTRA5</span>
      </Typography>
    </Box>

    {/* Right section */}
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#fbc02d',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#f5a623',
        },
        marginLeft: { xs: '0', sm: '20px' },
        marginTop: { xs: '10px', sm: '0' },
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      <span style={{ color: 'blue' }}>👉🏿</span> VIEW OFFER
    </Button>
  </Box>
);



export function Router() {
  
  return useRoutes([
    {
      path: '/',
      
      element: (
        <Suspense fallback={<SplashScreen />}>
          <PromoBanner/>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </Suspense>
      ),
    },

    // Auth
    ...authRoutes,
    ...authDemoRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // Components
    ...componentsRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
