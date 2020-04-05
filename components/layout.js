import Head from 'next/head';
import Header from './header';
import GlobalStyle from './globalStyle';
import Container from './container';

const Layout = ({ title, children }) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>Renqvists verkstad - {title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Merriweather'
        rel='stylesheet'
      />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
