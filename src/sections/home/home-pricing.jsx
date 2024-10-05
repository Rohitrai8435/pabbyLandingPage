import { useState } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Card, Tooltip, CardContent, useMediaQuery } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';

// Pricing logic
const pricingData = {
  Monthly: { price: 4929, oldPrice: 4929 },
  Yearly: { price: 3259, oldPrice: 4929 },
  '2 Yearly': { price: 3000, oldPrice: 4929 },
  '3 Yearly': { price: 3059, oldPrice: 4929 }, // Updated price
};

export function HomePricing({ sx, ...other }) {
  const theme = useTheme();
  const [billingPeriod, setBillingPeriod] = useState('Monthly');

  const handleBillingChange = (event, newValue) => {
    setBillingPeriod(newValue);
  };

  const renderDescription = (
    <SectionTitle
      caption="Plans"
      title="The #1 Most Powerful Business Suite with No Feature Restriction.... Without the High Costs "
      description="Join 14,099+ businesses that trust Pabbly to streamline their requirements. Pay once for easy management of your business, and you will get access to all Pabbly applications with Pabbly Plus plans."
      sx={{ mb: 10, textAlign: 'center' }}
    />
  );

  // Get the current pricing based on the selected billing period
  const currentPricing = pricingData[billingPeriod];

  return (
    <Stack
      component="section"
      sx={{ pb: { xs: 10, md: 10 }, pt: 10, position: 'relative', ...sx }}
      {...other}
    >
      <Container>
        {/* Promotional Banner */}
        <MotionViewport>{renderDescription}</MotionViewport>
        <Box
          sx={{
            p: 2,
            textAlign: 'center',
            backgroundColor: '#20B276',
            color: '#fff',
            borderRadius: 1,
            mb: 3,
            fontWeight: 'bold',
            fontSize: {
              xs: '0.9rem', // Smaller font size for extra small screens
              sm: '1rem', // Default for small screens
              md: '1.1rem', // Slightly larger for medium screens and above
            },
          }}
        >
          <span>{`🎉 DON'T MISS OUT - Get Extra 5% Discount on Pabbly Plus (Yearly Plan)!`}</span>
          Code: <strong style={{ textDecoration: 'underLine' }}>EXTRA5</strong>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Billing Period Selector */}
          <Box
            sx={{
              textAlign: 'center',
              mb: 3,
            }}
          >
            <Tabs
              value={billingPeriod}
              onChange={handleBillingChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="billing period selector"
              centered
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '0.85rem', // Adjust font size for smaller screens
                    sm: '0.95rem',
                    md: '1rem',
                  },
                  padding: {
                    xs: '8px',
                    md: '12px',
                  },
                },
                '& .Mui-selected': {
                  fontSize: {
                    xs: '0.85rem', // Adjust font size for smaller screens
                    sm: '0.95rem',
                    md: '1rem',
                  },
                  padding: {
                    xs: '8px',
                    md: '12px',
                  },
                },
              }}
            >
              <Tab
                label={
                  <Tooltip
                    title={
                      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                        Pay monthly for flexibility
                      </Typography>
                    }
                    arrow
                    placement="top"
                  >
                    <span>Monthly</span>
                  </Tooltip>
                }
                value="Monthly"
              />

              <Tab
                label={
                  <Tooltip
                    title={
                      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                        You will get 33% discount on pricing.
                      </Typography>
                    }
                    arrow
                    placement="top"
                  >
                    <span>
                      Yearly -{' '}
                      <span style={{ color: `${theme.palette.primary.main}` }}>SAVE 33%</span>
                    </span>
                  </Tooltip>
                }
                value="Yearly"
              />

              <Tab
                label={
                  <Tooltip
                    title={
                      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                        You will get 33% discount on pricing.
                      </Typography>
                    }
                    arrow
                    placement="top"
                  >
                    <span>
                      2 Yearly -{' '}
                      <span style={{ color: `${theme.palette.primary.main}` }}>SAVE 33%</span>
                    </span>
                  </Tooltip>
                }
                value="2 Yearly"
              />

              <Tab
                label={
                  <Tooltip
                    title={
                      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                        You will get 40% discount on pricing.
                      </Typography>
                    }
                    arrow
                    placement="top"
                  >
                    <span>
                      3 Yearly -{' '}
                      <span style={{ color: `${theme.palette.primary.main}` }}>SAVE 40%</span>
                    </span>
                  </Tooltip>
                }
                value="3 Yearly"
              />
            </Tabs>
          </Box>
          {/* <PricingTabs/> */}

          {/* Pricing Plans */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              mt: 5,
            }}
          >
            {/* FREE Plan */}
            <PlanCard
              plan={{
                license: 'FREE',
                price: 0,
                oldPrice: 3000,
                commonFeature: ['Access All Pabbly Apps', 'Unlimited Features'],
                features: [
                  {
                    image: 'product-1.svg',
                    title: 'Pabbly Connect',
                    sub_title: '100 Tasks Every Month',
                    tooltip:
                      'With Pabbly Connect, you can seamlessly integrate various applications for business automation and get 100 tasks in the free plan.',
                  },
                  {
                    image: 'product-2.svg',
                    title: 'Pabbly Subscription Billing',
                    sub_title: '$100 Monthly Revenue',
                    tooltip:
                      'With Pabbly Subscription Billing, you can collect up to $100 in monthly revenue, no access to the powerful affiliate module and with feature restrictions in the free plan.',
                  },
                  {
                    image: 'product-3.svg',
                    title: 'Pabbly Email Marketing',
                    sub_title: '100 Subscribers',
                    tooltip:
                      'With Pabbly Email Marketing, you can send bulk emails to 100 subscribers, with feature restrictions in the free plan.',
                  },
                  {
                    image: 'product-4.svg',
                    title: 'Pabbly Form Builder',
                    sub_title: '1 Form',
                    tooltip:
                      'With Pabbly Form Builder, you can create only one form for any business, with feature restrictions in the free plan.',
                  },
                ],
                buttonText: 'SIGN UP',
                color: 'inherit',
                size: 'large',
                variant: 'outlined',
              }}
              free
            />

            {/* PABBLY PLUS Plan */}
            <PlanCard
              plan={{
                license: 'PABBLY PLUS',
                oldPrice: currentPricing.oldPrice,
                price: currentPricing.price, // Dynamic price based on billing period
                commonFeature: [
                  'Access All Pabbly Apps', // Corrected bold tags
                  'Unlimited Features', // Corrected bold tags
                ],
                features: [
                  {
                    image: 'product-1.svg',
                    title: 'Pabbly Connect',
                    sub_title: '32,000 Tasks Every Month',
                    tooltip:
                      'With Pabbly Connect, you can seamlessly integrate various applications for business automation without any feature restrictions.',
                  },
                  {
                    image: 'product-2.svg',
                    title: 'Pabbly Subscription Billing',
                    sub_title: 'Unlimited Subscription Billing',
                    tooltip:
                      'With Pabbly Subscription Billing, you have unlimited access to all features, including the powerful affiliate module, and can collect unlimited monthly revenue.',
                  },
                  {
                    image: 'product-3.svg',
                    title: 'Pabbly Email Marketing',
                    sub_title: '100,000 Subscribers',
                    tooltip:
                      'With Pabbly Email Marketing, you can send unlimited bulk emails to up to 100,000 subscribers without any feature restrictions.',
                  },
                  {
                    image: 'product-4.svg',
                    title: 'Pabbly Form Builder',
                    sub_title: 'Unlimited Forms',
                    tooltip:
                      'With Pabbly Form Builder, you can create unlimited online forms for any business without any feature restrictions.',
                  },
                ],
                buttonText: 'BUY NOW',
                color: 'inherit',
                size: 'large',
                variant: 'contained',
              }}
              plus
            />
          </Box>
        </Box>
        {/* Additional note */}
        <Typography variant="caption" display="block" sx={{ mt: 3, textAlign: 'center' }}>
          *To increase your limits, you can purchase additional quantities of the Pabbly Plus plan.
          Each additional quantity extends your subscriber and task limits.
        </Typography>
        <GuaranteeCard />
        <EnterpriseReady />
      </Container>
    </Stack>
  );
}

// PlanCard Component with Tooltip functionality
const PlanCard = ({ plan, plus = false, free = false, sx, ...other }) => {
  const theme = useTheme();

  return (
    <Stack
      spacing={4}
      sx={{
        p: {
          xs: 1, // Padding for extra small devices
          sm: 3, // Padding for small devices
          md: 4, // Padding for medium and larger devices
        },
        py: {
          xs: 2, // Padding for extra small devices
          sm: 3, // Padding for small devices
          md: 4, // Padding for medium and larger devices
        },
        borderRadius: 2,
        boxShadow: plus
          ? {
              xs: '0px 0px 5px rgba(0, 0, 0, 0.1)', // Box shadow for extra small devices
              md: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Box shadow for medium and larger devices
            }
          : 'none',
        border: free
          ? `1px solid ${theme.palette.grey[300]}`
          : `1px solid ${theme.palette.primary.main}`,
        width: {
          xs: '100%',
          sm: '300px',
          md: '350px',
        },
        textAlign: { xs: 'center', sm: 'center', md: 'center' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        ...sx,
        '&:hover': {
          boxShadow: theme.shadows[6], // Adds shadow on hover
        },
      }}
      {...other}
    >
      {/* License Title */}
      <Typography
        variant="h6"
        sx={{
          textTransform: 'uppercase',
          color: plus ? 'inherit' : theme.palette.primary.main,
          fontWeight: 'bold',
        }}
      >
        {plan.license}
      </Typography>

      {/* Pricing */}
      {plus && (
        <Box sx={{ alignSelf: 'center' }}>
          <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
            normally ₹{plan.oldPrice}/mo
          </Typography>
          <Typography variant="h3" sx={{ color: 'inherit' }}>
            ₹{plan.price}/mo
          </Typography>
        </Box>
      )}
      {free && (
        <Box sx={{ alignSelf: 'center' }}>
          <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
            normally ₹{plan.oldPrice}/mo
          </Typography>
          <Typography variant="h3" sx={{ color: 'inherit' }}>
            ₹{plan.price}/mo
          </Typography>
        </Box>
      )}

      {/* Common Features */}
      <Divider sx={{ borderWidth: '1px', mb: 1 }} />
      <Box sx={{ mb: 2, alignSelf: 'center' }}>
        {plan.commonFeature.map((feature, index) => (
          <Box
            display="flex"
            sx={{ alignItems: { xs: 'start', md: 'center', sm: 'center', lg: 'center' } }}
          >
            {free ? (
              <Icon
                icon="mingcute:close-fill"
                width={{ xs: '5px', md: '15px' }}
                height={{ xs: '5px', md: '15px' }}
                style={{ color: '#FF5F1E', marginRight: 22, fontWeight: '500' }}
              />
            ) : (
              <Icon
                icon="mingcute:check-fill"
                width={{ xs: '5px', md: '15px' }}
                height={{ xs: '5px', md: '15px' }}
                style={{ color: '#20B276', marginRight: 22 }}
              />
            )}
            <Typography
              variant="body2"
              key={index}
              sx={{ textAlign: 'start', fontSize: { xs: '10px', md: '15px' } ,fontWeight:"700"}}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Features with Tooltip */}
      <Stack spacing={3} sx={{ typography: 'body2', alignSelf: 'center' }}>
        {plan.features.map((feature, index) => (
          <Tooltip
            title={
              <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                {feature.tooltip}
              </Typography>
            }
            key={index}
            arrow
            placement="top"
          >
            <Box sx={{ display: 'flex', alignItems: 'start', gap: { xs: '4px', md: 2 } }}>
              <Box
                component="img"
                src={`${CONFIG.site.basePath}/assets/icons/home/${feature.image}`}
                alt={feature.title}
                width={24}
                height={24}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '1rem',
                    },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    fontSize: { xs: '9px', sm: '10px', md: '15px' },
                  }}
                >
                  {feature.sub_title}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        ))}
      </Stack>

      {/* Action Button */}
      <Button variant={plan.variant} color={plan.color} size={plan.size} sx={{ mt: 3 }}>
        {plan.buttonText}
      </Button>
    </Stack>
  );
};

// GuaranteeCard Component
function GuaranteeCard() {
  return (
    <Stack sx={{ mt: '50px', mb: '50px' }}>
      <Card
        sx={{
          padding: { xs: '10px', sm: '15px', md: '20px' }, // Responsive padding
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            gap: { xs: '10px', md: '20px' },
            alignItems: 'start',
          }}
        >
          {/* Guarantee Badge */}
          <Box
            component="img"
            alt="guarantee image"
            src={`${CONFIG.site.basePath}/assets/images/home/moneyback-gurantee-new.webp`}
            sx={{
              width: { xs: '80px', sm: '100px', md: '114px' },
              height: { xs: '80px', sm: '100px', md: '114px' },
              objectFit: 'contain',
            }}
          />

          {/* Main Offer */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h7" fontWeight="700" color="#788692">
              100% NO-RISK DOUBLE-GUARANTEE
            </Typography>
            <Typography variant="h5" fontWeight="900" mb={2}>
              <span>{`If you don't like Pabbly over the next 30 days, I will happily refund 100% of your purchase. No questions asked.`}</span>
            </Typography>

            {/* Offer Explanation */}
            <Typography mt={2} variant="body1">
              <span>{`Here's why I'm offering this - I have seen the power of scaling your business. Take some time out of your busy schedule today and see what all things can be done to grow your business.`}</span>
            </Typography>
            <Typography mt={1} variant="body1">
              <span>
                {`You will find that most of your time is going in doing things that could be done
                better by using the right tools. You just have to give it a shot!`}
              </span>
            </Typography>

            {/* Closing Text */}
            <Typography mt={2} fontWeight="bold">
              <span>
                {`Start growing your business today with Pabbly and I'm pretty sure you're going to
                love it!!`}
              </span>
            </Typography>
            <Typography mt={1}>
              <span>
                {`Thank you, and I hope we'll get the opportunity to be a part of your growth journey
                soon!`}
              </span>
            </Typography>

            {/* Signature */}
            <Box mt={3}>
              <Box
                component="img"
                alt="signature"
                src={`${CONFIG.site.basePath}/assets/images/home/Neeraj-Sir-1.webp`}
                sx={{
                  width: { xs: '150px', sm: '198px' },
                  height: '36px',
                  objectFit: 'contain',
                  mb: '10px',
                }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: '8px' }}>
                Neeraj Agarwal
              </Typography>
              <Typography>Co-Founder Pabbly</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box
        component="img"
        alt="security seals"
        src={`${CONFIG.site.basePath}/assets/images/home/seals@2x%20(1).webp`}
        sx={{
          height: { xs: '40px', sm: '50px', md: '61px' },
          width: { xs: '250px', sm: '280px', md: '303px' },
          objectFit: 'contain',
          mt: '30px',
          alignSelf: 'center',
        }}
      />
    </Stack>
  );
}

// EnterpriseReady Component
function EnterpriseReady() {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card
        sx={{
          padding: { xs: '10px', sm: '15px', md: '20px' }, // Responsive padding
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Header Section */}
          <Box display="flex" alignItems="center" mb={3} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              alt="guarantee image"
              src="/assets/images/home/Security_Shield-1.svg"
              sx={{
                width: { xs: '25px', sm: '50px', md: '50px' },
                height: { xs: '25px', sm: '50px', md: '50px' },
                objectFit: 'contain',
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              color="inherit"
              sx={{ fontSize: { xs: '20px', sm: '40px' }, fontWeight: '1000' }}
            >
              Pabbly is <span style={{ color: '#0062cc' }}>Enterprise Ready!</span>
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography variant="h6" textAlign="start" mb={4}>
            <span>{`To ensure seamless operations, security, privacy, and compliance need to be coherent. Pabbly is SOC2 Type 2 and ISO 27001:2022 certified. We ensure that the customer's data is protected without any lapses in security. You're safe with us.`}</span>
          </Typography>

          {/* SOC2 Type 2 Compliant Section */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              mb: 4,
              flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' },
              gap: '10px',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex' }}>
                <VerifiedUserIcon
                  sx={{ fontSize: { xs: '25px', sm: '30px', md: '30px' }, color: '#ffcc00', mr: 2 }}
                />
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  SOC2 Type 2 Compliant
                </Typography>
              </Box>
              <Typography>
                <span>
                  {`We take pride in our SOC2 Type 2 Compliance, showcasing our dedication to rigorous
                  audits, stringent controls, and comprehensive risk management. Your trust is our
                  top priority, and our compliance with SOC2 standards means you can rest assured
                  that your data is managed with the highest integrity and confidentiality.`}
                </span>
              </Typography>
            </Box>
            <Box
              component="img"
              alt="guarantee image"
              src="/assets/images/home/21972-312_SOC_NonCPA-min.webp"
              sx={{
                width: { xs: '80px', sm: '100px', md: '114px' },
                height: { xs: '80px', sm: '100px', md: '114px' },
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* ISO 27001:2022 Certified Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              mb: 3,
              flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' },
              gap: '10px',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex' }}>
                <SecurityIcon
                  sx={{ fontSize: { xs: '25px', sm: '30px', md: '30px' }, color: '#0062cc', mr: 2 }}
                />
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  ISO 27001:2022 Certified
                </Typography>
              </Box>
              <Typography>
                <span>
                  {`At Pabbly Connect, we don't just promise security; we prove it. Our steadfast
                  commitment is backed by the prestigious ISO 27001:2022 Certification, a testament
                  to our world-class data protection standards. This globally recognized framework
                  is our blueprint for securing your information, ensuring continuous improvement in
                  our security measures.`}
                </span>
              </Typography>
            </Box>
            <Box
              component="img"
              alt="ISO certification image"
              src="/assets/images/home/ISO-27001-2022.webp"
              sx={{
                width: { xs: '80px', sm: '100px', md: '114px' },
                height: { xs: '80px', sm: '100px', md: '114px' },
                objectFit: 'contain',
              }}
            />
          </Box>
        </Container>
      </Card>
    </Stack>
  );
}



const PricingTabs = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ display: 'flex' ,justifyContent:"center"}}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }} // Hide the default underline
          textColor="inherit"
          aria-label="pricing plans"
          orientation={isSmallScreen ? 'vertical' : 'horizontal'} // Change orientation based on screen size
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
           
          }}
        >
          <Tab
            label="Monthly"
            sx={{
              border: '1px solid #EDEDED',
              width: isSmallScreen ? '100%' : '200px',
              borderRadius: '20px',
              fontWeight: 'bold',
              color: value === 0 ? 'yellow' : 'black',
              backgroundColor: value === 0 ? 'blue' : 'transparent',
              mb: isSmallScreen ? '-10px' : '0px', // Adds margin-bottom for vertical layout
              mr: !isSmallScreen ? '-10px' : '10px', // Adds margin-right for horizontal layout
            }}
          />
          <Tab
            label="Yearly - SAVE 33%"
            sx={{
              border: '1px solid #EDEDED',
              width: isSmallScreen ? '100%' : '200px',
              borderRadius: '20px',
              fontWeight: 'bold',
              color: value === 1 ? 'yellow' : 'black',
              backgroundColor: value === 1 ? 'blue' : 'transparent',
              mb: isSmallScreen ? '-10px' : '0',
              mr: !isSmallScreen ? '-20px' : '10px',
            }}
          />
          <Tab
            label="2 Yearly - SAVE 33%"
            sx={{
              border: '1px solid #EDEDED',
              width: isSmallScreen ? '100%' : '200px',
              borderRadius: '20px',
              fontWeight: 'bold',
              color: value === 2 ? 'yellow' : 'black',
              backgroundColor: value === 2 ? 'blue' : 'transparent',
              mb: isSmallScreen ? '-10px' : '0',
              mr: !isSmallScreen ? '-20px' : '10px',
            }}
          />
          <Tab
            label="3 Yearly - SAVE 40%"
            sx={{
              border: '1px solid #EDEDED',
              width: isSmallScreen ? '100%' : '200px',
              borderRadius: '20px',
              fontWeight: 'bold',
              color: value === 3 ? 'yellow' : 'black',
              backgroundColor: value === 3 ? 'blue' : 'transparent',
            }}
          />
        </Tabs>
      </Box>
    </Container>
  );
};

export default PricingTabs;


