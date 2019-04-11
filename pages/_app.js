import App, { Container } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Mosk';
    src: url('static/Mosk_Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body, html {
    font-family: 'Mosk', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 700vh;
    color: black;
    background: white;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp;