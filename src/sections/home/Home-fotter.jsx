import PhoneOutlineIcon from '@mui/icons-material/Phone';
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Import the outline star icon
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadsetMicOutlineIcon from '@mui/icons-material/HeadsetMic';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; // Import the outline verified icon
import { Box, Grid, Stack, Divider, Tooltip, Container, Typography } from '@mui/material';
import {
  YouTube,
  Twitter,
  Facebook,
  Instagram,
  ForumOutlined,
  BusinessOutlined,
} from '@mui/icons-material';

import { CONFIG } from 'src/config-global';

import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  const footer = (
    <Stack component="footer" sx={{ py: 5 }}>
      <Divider sx={{ my: 4 }} />
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="Learn more about us" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  About Us
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="Read our privacy policy" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Privacy Policy
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="Terms and conditions" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="Careers opportunities" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Careers
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="Learn about our security practices" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Security
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip title="View our brand assets" arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Brand Assets
                </Typography>
              </Tooltip>
            </Box>
          </Grid>

          {/* Learn Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Learn
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Access 6.6K+ video tutorials to learn how Pabbly Connect works."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Connect Videos
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Join Pabbly Connect Facebook community with over 17.1K+ members."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Connect Community
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Join Pabbly Subscription Billing Facebook community with over 2.4K+ members."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Subscription Billing <br />
                  Community
                </Typography>
              </Tooltip>
            </Box>
            <Typography variant="h6" gutterBottom>
              Partners
            </Typography>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Join the Pabbly affiliate program and start earning a 30% commission."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Affiliate Program
                </Typography>
              </Tooltip>
            </Box>
          </Grid>

          {/* Products Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="With Pabbly Plus you can access all Pabbly applications for a single price."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Plus
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Connect application allows you to seamlessly integrate various applications for business automation."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Connect
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Subscription Billing allows you to easily manage subscription plans"
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Subscription Billing
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Email Marketing application allows you to send unlimited bulk emails to your subscribers."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Email Marketing
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Form Builder application enables you to create any kind of online form for your business."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Form Builder
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Email Verification application allows you to check whether an email address is valid or invalid."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Email Verification
                </Typography>
              </Tooltip>
            </Box>
          </Grid>

          {/* Contact and Social Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MailOutlineIcon fontSize="small" />
              <Tooltip title="Contact us for pre-sales inquiries." arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Sales: sales@pabbly.com
                </Typography>
              </Tooltip>
            </Box>

            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HeadsetMicOutlineIcon fontSize="small" />
              <Tooltip title="Contact us for technical assistance." arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Support: support@pabbly.com
                </Typography>
              </Tooltip>
            </Box>

            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneOutlineIcon fontSize="small" />
              <Tooltip title="Get in touch with the Pabbly team." arrow placement="top">
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Contact Us
                </Typography>
              </Tooltip>
            </Box>

            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ForumOutlined fontSize="small" />
              <Tooltip
                title="Visit our support forum for help and discussions."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Support Forum
                </Typography>
              </Tooltip>
            </Box>

            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BusinessOutlined fontSize="small" />
              <Tooltip
                title="Reach out to the sales team for enterprise plans."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Enterprise
                </Typography>
              </Tooltip>
            </Box>

            {/* Social Icons */}
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Facebook
                  style={{
                    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out', // Smooth transition for scale and color
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <YouTube
                  style={{
                    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <Instagram
                  style={{
                    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <Twitter
                  style={{
                    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Developer, Integrations, Certifications */}
        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Developer
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Subscription Billing API documentation allows developers to generate invoices and manage subscriptions."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  API - Pabbly Subscription Billing
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Pabbly Email Marketing API documentation enables developers to create and send emails."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  API - Pabbly Email Marketing
                </Typography>
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Integrations
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Explore over 2000+ app integrations available through Pabbly Connect."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Pabbly Connect Integrations
                </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Tooltip
                title="Integrate your app with the Pabbly Connect Developer platform."
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main', cursor: 'pointer' },
                  }}
                >
                  Integrate Your App
                </Typography>
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Certification
            </Typography>
            {[
              {
                label: 'SOC2 Type 2',
                tooltip: 'Pabbly is SOC2 Type 2 certified.',
                icon: <StarBorderIcon fontSize="small" />,
              },
              {
                label: 'ISO 27001:2022',
                tooltip: 'Pabbly is ISO 27001:2022 certified.',
                icon: <VerifiedOutlinedIcon fontSize="small" />,
              },
            ].map((item) => (
              <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }} key={item.label}>
                <Tooltip title={item.tooltip} arrow placement="top">
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'primary.main', cursor: 'pointer' },
                    }}
                  >
                    {item.icon}&nbsp;{item.label}
                  </Typography>
                </Tooltip>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                gap: '15px',
                flexDirection: {
                  xs: 'row', // Horizontal alignment for small screens
                  sm: 'row', // Vertical alignment for medium screens and above
                  md: 'row',
                },
              }}
            >
              <Tooltip
                title="Pabbly is SOC2 Type 2 and ISO 27001:2022 certified."
                arrow
                placement="top"
              >
                <Box
                  component="img"
                  alt="security seals"
                  src={`${CONFIG.site.basePath}/assets/images/home/ISO-27001-2022.webp`}
                  sx={{
                    height: '90px',
                    width: '90px',
                    objectFit: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </Tooltip>
              <Tooltip
                title="Pabbly is SOC2 Type 2 and ISO 27001:2022 certified."
                arrow
                placement="top"
              >
                <Box
                  component="img"
                  alt="security seals"
                  src={`${CONFIG.site.basePath}/assets/images/home/21972-312_SOC_NonCPA-min.webp`}
                  sx={{
                    height: '90px',
                    width: '90px',
                    objectFit: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Divider sx={{ my: 3 }} />
      <Box textAlign="center">
        <Typography variant="body2">
          MagnetBrains LLC DBA Pabbly © 2024. All Rights Reserved.
        </Typography>
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>{footer}</MotionViewport>
    </Stack>
  );
}
