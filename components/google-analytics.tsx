import Head from "next/head"

const GoogleAnalytics = () => (
  <Head>
    {/* Google tag (gtag.js) */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LCXNR1DPG8"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LCXNR1DPG8');
        `,
      }}
    />
  </Head>
)

export default GoogleAnalytics;