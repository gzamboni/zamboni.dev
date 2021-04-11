import Document, { Html, Head, Main, NextScript } from 'next/document'
import DialogFlow from '../components/dialogflow'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <DialogFlow />
        </body>
      </Html>
    )
  }
}

export default MyDocument
