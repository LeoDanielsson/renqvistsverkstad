import Head from 'next/head';

async function init() {
  if (typeof window !== undefined) {
    const CMS = await import('netlify-cms-app');
    CMS.init();
  }
}

init();

export default function CmsPage() {
  return (
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
}
