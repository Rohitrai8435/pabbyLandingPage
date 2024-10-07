import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Pabbly- Online Marketing and Sales Software',
  description:
    'Pabbly is a business platform offering tools for automation, email marketing, subscription billing, and form building, simplifying workflows and app integration.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <HomeView />
    </>
  );
}
