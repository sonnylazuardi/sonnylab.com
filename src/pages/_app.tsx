import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="https://fav.farm/🧑‍💻" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
