import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  
  componentDidCatch(err){
      console.log(err)
  }

  render () {
    const { Component, pageProps } = this.props

    return (
        <Container>
            <p>soc de l'_app. dins de container</p>
            <Page {...pageProps}>
                <p>soc de l'_app. dins de Page</p>
                <Component  />
            </Page>
      </Container>
    )
  }
}