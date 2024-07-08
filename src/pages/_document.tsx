import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <title>Societas Arcana - Exclusive Security and Intelligence Membership</title>
        <meta name="description" content="Join Societas Arcana, an exclusive community offering exceptional security and intelligence services tailored to your unique needs." />
        <meta name="keywords" content="Societas Arcana, security, intelligence, exclusive membership, personal security, confidential consultations" />
        <meta name="author" content="Societas Arcana" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.societasarcana.com/" />
        <meta property="og:title" content="Societas Arcana - Exclusive Security and Intelligence Membership" />
        <meta property="og:description" content="Join Societas Arcana, an exclusive community offering exceptional security and intelligence services tailored to your unique needs." />
        <meta property="og:image" content="https://www.societasarcana.com/social-card.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.societasarcana.com/" />
        <meta property="twitter:title" content="Societas Arcana - Exclusive Security and Intelligence Membership" />
        <meta property="twitter:description" content="Join Societas Arcana, an exclusive community offering exceptional security and intelligence services tailored to your unique needs." />
        <meta property="twitter:image" content="https://www.societasarcana.com/social-card.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
