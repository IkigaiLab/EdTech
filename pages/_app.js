import { AuthProvider } from '.././firebase/auth';
import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
import { Router } from 'next/router';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../Utils/app/store';
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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
