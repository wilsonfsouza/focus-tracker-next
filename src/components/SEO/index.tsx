import Head from 'next/head';

interface SEOProps {
  title: string;
}

export default function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>Smart.it | {title}</title>

      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="title" content={`Smart.it | ${title}`} />
      <meta name="keywords" content="Wilson Franca de Souza, focus, move" />
      <meta name="description" content="An app to help you balance your focus sessions with ergonomic movements." />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smart.it" />
      <meta property="og:title" content={`Smart.it | ${title}`} />
      <meta property="og:description" content="An app to help you balance your focus sessions with ergonomic movements." />
      <meta property="og:image" content={`${process.env.NEXTAUTH_URL}/thumb.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.env.NEXTAUTH_URL} />
      <meta property="twitter:title" content={`Smart.it | ${title}`} />
      <meta name="twitter:image" content={`${process.env.NEXTAUTH_URL}/thumb.png`} />
      <meta name="twiiter:image:alt" content="Thumbnail" />
      <meta name="twitter:description" content="An app to help you balance your focus sessions with ergonomic movements." />
      <meta name="twiiter:create" content="Wilson Franca de Souza" />
    </Head>
  );
}
