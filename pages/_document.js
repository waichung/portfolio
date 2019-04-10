import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

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
    height: 600vh;
    color: black;
    background: white;
  }
`;

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        {/* <GlobalStyles /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}