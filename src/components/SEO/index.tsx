import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>Smart.work | {title}</title>

      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="keywords" content="wilsonfsouza, focus, move" />
      <meta name="description" content="An app to help you balance your focus sessions with ergonomic movements." />

      <meta property="og:site_name" content="Smart.work" />
      <meta property="og:title" content="Smart.work" />
      <meta property="og:description" content="An app to help you balance your focus sessions with ergonomic movements." />
      <meta property="og:image" content="/thumb.svg" />
      <meta property="og:image:type" content="image/svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:image" content="/thumb.svg" />
      <meta name="twiiter:image:alt" content="Thumbnail" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Smart.work" />
      <meta name="twitter:description" content="An app to help you balance your focus sessions with ergonomic movements." />
      <meta name="twiiter:create" content="wilsonfsouza" />
    </Head>
  );
}

export default SEO;
