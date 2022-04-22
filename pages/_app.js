import '../styles/globals.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { StoreProvider } from '../utils.js/Store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <PayPalScriptProvider deferLoading={true}>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </StoreProvider>
  );
}

export default MyApp;
