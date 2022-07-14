import Head from 'next/head';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import Footer from './Footer';

const Layout = ({ title, children }) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>Renqvists verkstad - {title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
