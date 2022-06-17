import '../styles/globals.css';
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <StrictMode>
          <Component {...pageProps} />
        </StrictMode>
    </>
  )
}

export default MyApp
