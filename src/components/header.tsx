import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Posts', page: '/posts' },
  { label: 'Contact', page: '/contact' },
]

const ogImageUrl = 'https://zamboni.dev/og-image.png'

export default ({
  titlePre = '',
  description = 'This is my personal blog/site to shared my thoughts and things about IA, Machine Learning, SRE, DevOps',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Zamboni.Dev</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description}></meta>
        <meta name="og:title" content="Zamboni.dev" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@gzamboni" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a
                  className={
                    pathname === page ||
                    (page === '/blog' && pathname.startsWith(page))
                      ? 'active'
                      : undefined
                  }
                >
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
