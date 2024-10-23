import { useState } from 'react';
import { m } from 'framer-motion';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'What is Pabbly Plus?',
    answer: (
      <Typography>
        Pabbly Plus is all in one application that comprises all Pabbly applications that cater to
        all your needs to do marketing and sales. Whether it’s sending bulk or promotional emails,
        integrating different applications, placing subscription forms over the website, managing
        sales & billing of customers or verifying email databases, Pabbly Plus upholds everything
        that is needed for running any business flawlessly.
      </Typography>
    ),
  },
  {
    question: 'Will new applications be included in Pabbly Plus?',
    answer: (
      <Typography>
        Yes, all new applications that we will be releasing will be included in the Pabbly Plus
        plans without any cost. Note that all these new applications will be available for older
        customers as well.
      </Typography>
    ),
  },
  {
    question: 'What does Pabbly Plus include?',
    answer: (
      <Typography>
        Pabbly Plus is a comprehensive application that includes all of the tools and features
        available from Pabbly. At present, Pabbly Plus includes Pabbly Connect, Pabbly Subscription
        Billing, Pabbly Email Marketing, and Pabbly Form Builder.
      </Typography>
    ),
  },
  {
    question: 'How does the pricing plan work for Pabbly Plus??',
    answer: (
      <Typography>
        The pricing plans for Pabbly are straightforward and provide access to all Pabbly
        applications. You can start with the lowest plan at ₹4079 per month and immediately use all
        Pabbly applications.
      </Typography>
    ),
  },
  {
    question: 'Will new applications launched be included in Pabbly Plus?',
    answer: (
      <Typography>
        Yes, whenever a new Pabbly application is launched, it will be included in the Pabbly Plus
        plans.
      </Typography>
    ),
  },
  {
    question: 'Is Pabbly ISO 27001:2022 certified?',
    answer: (
      <Typography>
        Yes, Pabbly is proud to be ISO 27001:2022 certified. This certification demonstrates our
        commitment to maintaining the highest standards of information security. ISO 27001:2022 is a
        globally recognized standard that provides a framework for establishing, implementing,
        maintaining, and continually improving an Information Security Management System (ISMS).
      </Typography>
    ),
  },
  {
    question: 'Can I purchase an individual application as well?',
    answer: (
      <Typography>
        Yes, you can purchase individual Pabbly applications as well. However, we recommend
        purchasing Pabbly Plus because it gives you access to all of the Pabbly applications, which
        can be used to meet all of your business needs.
      </Typography>
    ),
  },
  {
    question: "I'm using a single application of Pabbly. Can I switch to Pabbly Plus?",
    answer: (
      <Typography>
        If you are currently using a single Pabbly application and would like to switch to Pabbly
        Plus, you can do so by making a purchase for Pabbly Plus. Once you have made the purchase,
        you can simply email support@pabbly.com to cancel your previous subscription.
      </Typography>
    ),
  },
  {
    question: 'Can I cancel subscription anytime?',
    answer: (
      <Typography>
        Yes, you can cancel your Pabbly Plus subscription at any time. There are no contracts
        involved, so you are free to cancel your subscription whenever you choose. To do so, simply
        email support@pabbly.com to request cancellation.
      </Typography>
    ),
  },
  {
    question: 'Do you offer discounts?',
    answer: (
      <Typography>
        Yes, we offer discounts of over 15% if you purchase yearly plans. Check the Pabbly Plus
        pricing plans here.
      </Typography>
    ),
  },
  {
    question: 'Can I stack Pabbly Plus plan for higher limits?',
    answer: (
      <Typography>
        Yes, to increase your limits, you can purchase additional quantities of the Pabbly Plus
        plan. Each additional quantity extends your subscriber and task limits.
      </Typography>
    ),
  },
  {
    question: 'Is Pabbly SOC2 compliant?',
    answer: (
      <Typography>
        Yes, Pabbly is compliant with SOC2 Type 2 standards. This compliance signifies that our
        system’s design meets the trust principles set out by the American Institute of CPAs (AICPA)
        regarding security, availability, and confidentiality. SOC2 Type 2 compliance is
        particularly relevant for technology and cloud-based organizations like Pabbly, as it
        assures our customers that we have implemented rigorous controls to protect their data
        against unauthorized access and threats.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {
  // const [expanded, setExpanded] = useState(FAQs[0].question);
const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = (
    <SectionTitle
      caption="FAQs"
      title="Frequently Asked"
      txtGradient="Questions!"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = (
    <Stack
      spacing={1}
      sx={{
        mt: 8,
        mx: 'auto',
        maxWidth: 720,
        mb: { xs: 5, md: 8 },
      }}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          expanded={expanded === item.question}
          onChange={() => setExpanded(expanded === item.question ? null : item.question)}
          sx={{
            borderRadius: 2,
            transition: (theme) =>
              theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
            '&::before': { display: 'none' },
            '&:hover': {
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          }}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6"> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );


  const renderContact = (
    <Stack
      alignItems="center"
      sx={{
        px: 3,
        py: 10,
        textAlign: 'center',
        background: (theme) =>
          `linear-gradient(270deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)})`,
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="h4">Still have questions?</Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          Please describe your case to receive the most accurate advice
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Button
          color="inherit"
          variant="contained"
          href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
          startIcon={<Iconify icon="fluent:mail-24-filled" />}
        >
          Contact us
        </Button>
      </m.div>
    </Stack>
  );

  return (
    <Stack component="section" sx={{ ...sx }} {...other}>
      <Container>
        <MotionViewport>{renderDescription}</MotionViewport>
        {renderContent}
      </Container>

      <Stack sx={{ position: 'relative' }}>
        <BottomLines />
        {renderContact}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function BottomLines() {
  return (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      <FloatPlusIcon sx={{ top: -8, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
    </>
  );
}
