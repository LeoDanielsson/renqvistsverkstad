import Head from 'next/head';
import Header from './header';
import GlobalStyle from './globalStyle';
import Container from './container';
import Footer from './footer';

const Layout = ({ title, children }) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>Renqvists verkstad - {title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Titillium+Web'
        rel='stylesheet'
      />
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
