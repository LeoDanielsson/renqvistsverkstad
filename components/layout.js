import Head from 'next/head';
import Header from './header';
import GlobalStyle from './globalStyle';
import Container from './container';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>Renqvists verkstad</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Merriweather'
        rel='stylesheet'
      />
    </Head>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
  </div>
);

export default Layout;
