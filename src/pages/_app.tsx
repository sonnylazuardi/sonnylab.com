import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';

const App = ({ Component, pageProps = {} }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://fav.farm/🧑‍💻" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
