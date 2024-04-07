import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'
import '../styles/globals.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'



export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='flex flex-col justify-between h-[100vh] space-y-10'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

