import { AuthProvider } from '.././firebase/auth';
import '../styles/globals.css';
import { Router } from 'next/router';
import { useState } from 'react';
const Loader = () => <div className="loader"></div>;

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log('route is changing');
    setloading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('route changing is Complete');
    setloading(false);
  });

  return (
    <>
      {loading && <Loader />}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
