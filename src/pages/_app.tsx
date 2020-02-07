import '../styles/global.css'
import App from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({ gtmId: 'GTM-WMXJ59C' })
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
