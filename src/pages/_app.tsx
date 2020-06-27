import '../styles/global.css'
import App from 'next/app'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WMXJ59C' })
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
