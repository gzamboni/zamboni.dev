import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <span>Copyright 2020-2030 by Giovani Zamboni, all rights reserved</span>
    </footer>
  </>
)
