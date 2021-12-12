import { AuthProvider } from '.././firebase/auth';
import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
// import 'codemirror/theme/dracula.css';
import { Router } from 'next/router';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../Utils/app/store';
const Loader = () => <div className="loader"></div>;

import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log('route is changing', url);
    setloading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('route changing is Complete', url);
    setloading(false);
  });

  return (
    <>
      {/* <Script id="my-script">{`alert("hello")`}</Script> */}
      {/* <Script id="my-script">{`console.log('Hello world!');`}</Script> */}
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
