import { ChakraProvider } from '@chakra-ui/react';
import Header from '../componentes/header';
import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
