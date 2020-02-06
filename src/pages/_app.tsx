import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
// export default ({ Component, pageProps }) => (
//   <>
//     <Component {...pageProps} />

//     <footer>
//       <span>Copyright 2020-2030 by Giovani Zamboni, all rights reserved</span>
//     </footer>
//   </>
// )
