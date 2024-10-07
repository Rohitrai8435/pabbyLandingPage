import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Button, Typography, CardContent, } from '@mui/material';

import { usePathname } from 'src/routes/hooks';
import { isExternalLink } from 'src/routes/utils';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import {  paper } from 'src/theme/styles';

import { NavLi, NavUl } from 'src/components/nav-section';

import { NavItem } from './nav-desktop-item';

// ----------------------------------------------------------------------

export function NavList({ data }) {
  const theme = useTheme();

  const navItemRef = useRef(null);

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const active = useActiveLink(data.path, !!data.children);

  const [clientRect, setClientRect] = useState({ top: 0, height: 0 });

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);
  const renderNavItem = (
    <NavItem
      ref={navItemRef}
      // slots
      title={data.title}
      path={data.path}
      // state
      active={active}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      // action
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
    />
  );

  const handleGetClientRect = useCallback(() => {
    const element = navItemRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      setClientRect({ top: rect.top, height: rect.height });
    }
  }, []);

  useEffect(() => {
    handleGetClientRect();

    window.addEventListener('scroll', handleGetClientRect);

    return () => {
      window.removeEventListener('scroll', handleGetClientRect);
    };
  }, [handleGetClientRect]);

  if (data.children) {
    return (
      <NavLi sx={{ height: 1 }} disabled="">
        {renderNavItem}

        {openMenu && (
          <Portal>
            <Fade in>
              <Box
                onMouseEnter={handleOpenMenu}
                onMouseLeave={handleCloseMenu}
                sx={{
                  pt: 0.5,
                  left: 0,
                  right: 0,
                  mx: 'auto',
                  width:"700px",
                  position: 'fixed',
                  zIndex: theme.zIndex.modal,
                  maxWidth: theme.breakpoints.values.lg,
                  top: Math.round(clientRect.top + clientRect.height),
                }}
              >
                <Box
                  component="nav"
                  sx={{
                    ...paper({ theme, dropdown: true }),
                    borderRadius: 2,
                    p: theme.spacing(1, 1, 1, 1),
                  }}
                >
                  <NavUl
                    
                  >
                    <NavSubList />
                  </NavUl>
                </Box>
              </Box>
            </Fade>
          </Portal>
        )}
      </NavLi>
    );
  }

  return <NavLi sx={{ height: 1 }}>{renderNavItem}</NavLi>;
}

// ----------------------------------------------------------------------
// Your main component
// Your main component
function NavSubList({ data, subheader, sx, ...other }) {
  const cardData = [
    {
      title: 'Pabbly Connect',
      description: 'Integrate different applications and start automating your work.',
      image: 'product-1.svg',
    },
    {
      title: 'Pabbly Email Marketing',
      description: 'Send email newsletters to your subscribers and customers.',
      image: 'product-2.svg',
    },
    {
      title: 'Pabbly Subscription Billing',
      description: 'Start accepting one-time and recurring subscription payments.',
      image: 'product-3.svg',
    },
    {
      title: 'Pabbly Form Builder',
      description: 'Send email newsletters to your subscribers and customers.',
      image: 'product-4.svg',
    },
  ];
const theme = useTheme();
  const renderCards = () =>
    
    cardData.map((card, index) => (
      <Grid item xs={12} sm={6} key={index}>
        <BasicCard title={card.title} description={card.description} image={card.image} />
      </Grid>
    ));

  return (
    <Stack>
      <Box sx={{ p: 2, margin: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #F5EAFF',
            display: 'inline-block',
            p: '2px 10px',
            borderRadius: '5px',
            position: 'absolute',
            top: '15px',
            left: '40px',
            bgcolor: '#fff',
            zIndex: 100,
          }}
        >
          <Typography sx={{ fontSize: '12px', letterSpacing: '1px', color: '#B546FC',fontWeight:"600" }}>
            BUNDLE
          </Typography>
        </Box>
        <Card variant="outlined" sx={{ mb: 2, p: 3, borderColor: '#F5EAFF', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box
              component="img"
              alt="Plus-1"
              src="assets/images/home/Plus-1.webp"
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                Pabbly Plus
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Pabbly Plus provides access to all Pabbly applications at a single price. You will
                have access to Pabbly Connect, Pabbly Subscription Billing, Pabbly Email Marketing,
                Pabbly Form Builder, and Pabbly Email Verification.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Grid container spacing={1}>
          {renderCards()}
          <Grid Grid item xs={12} sm={6}>
            <Card
              sx={{
                textAlign: 'center',
                mx: 'auto',
                border: '2px solid transparent',
                borderRadius: '8px',
                transition: 'border-color 0.3s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <CardContent>
                <Box display="flex" gap="3px">
                  <Box
                    component="img"
                    alt="Plus-1"
                    src="assets/icons/home/product-5.svg"
                    sx={{ width: 25, height: 25 }}
                  />
                  <Box>
                    <Typography
                      sx={{ mb: 1, fontSize: '16px', textAlign: 'start', fontWeight: 700 }}
                    >
                      Pabbly Email Verification
                    </Typography>

                    <Typography
                      color="textSecondary"
                      sx={{ textAlign: 'start', variant: 'body2', fontSize: '15px' }}
                    >
                      Verify your email list to remove invalid and bad emails.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid Grid item xs={12} sm={6}>
            <Card
              sx={{
                textAlign: 'center',
                mx: 'auto',
                border: '2px solid transparent',
                borderRadius: '8px',
                transition: 'border-color 0.3s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button variant="contained" color="inherit" sx={{ mb: 1 }}>
                    Sign up Now
                  </Button>
                </Box>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  No Credit Card Required.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

// BasicCard component for rendering individual cards
function BasicCard({ title, description, image }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        textAlign: 'center',
        mx: 'auto',
        border: '2px solid transparent',
        borderRadius: '8px',
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <CardContent>
        <Box display="flex" gap="3px">
          <Box
            component="img"
            alt={title}
            src={`/assets/icons/home/${image}`}
            sx={{ width: 25, height: 25 }}
          />
          <Box>
            <Typography sx={{ mb: 1, fontSize: '16px', textAlign: 'start', fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ textAlign: 'start', variant: 'body2', fontSize: '15px' }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}


// BasicCard component for rendering individual cards


