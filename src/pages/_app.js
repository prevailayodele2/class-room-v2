import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from 'theme/theme'
// import ThemeProvider from '../theme/ThemeProvider'
import 'styles/Fonts.css'
import 'styles/App.css'
import 'styles/Contact.css'
import Router from 'next/router';
import nProgress from 'nprogress';
import 'react-calendar/dist/Calendar.css'
import 'styles/MiniCalendar.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {

  
  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Class Room</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ChakraProvider>
  )
}

export default MyApp
