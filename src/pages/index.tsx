import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/gzamboni',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/gzamboni',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/zamboni/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:g@zamboni.dev?subject=Hi!',
  },
]

// export default function Index() {
//   return (
//     <>
//       <Header titlePre="Home" />
//       <div className={sharedStyles.layout}>
//         <img
//           src="/vercel-and-notion.png"
//           height="85"
//           width="250"
//           alt="Vercel + Notion"
//         />
//         <h1>My Notion Blog</h1>
//         <h2>
//           Blazing Fast Notion Blog with Next.js'{' '}
//           <ExtLink
//             href="https://github.com/vercel/next.js/issues/9524"
//             className="dotted"
//             style={{ color: 'inherit' }}
//           >
//             SSG
//           </ExtLink>
//         </h2>

//         <Features />

//         <div className="explanation">
//           <p>
//             This is a statically generated{' '}
//             <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
//             <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
//             is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>
//             . It leverages some upcoming features in Next.js like{' '}
//             <ExtLink href="https://github.com/vercel/next.js/issues/9524">
//               SSG support
//             </ExtLink>{' '}
//             and{' '}
//             <ExtLink href="https://github.com/vercel/next.js/issues/8626">
//               built-in CSS support
//             </ExtLink>{' '}
//             which allow us to achieve all of the benefits listed above including
//             blazing fast speeds, great local editing experience, and always
//             being available!
//           </p>

//           <p>
//             Get started by creating a new page in Notion and clicking the deploy
//             button below. After you supply your token and the blog index id (the
//             page's id in Notion) we will automatically create the table for you!
//             See{' '}
//             <ExtLink href="https://github.com/ijjk/notion-blog#getting-blog-index-and-token">
//               here in the readme
//             </ExtLink>{' '}
//             for finding the new page's id. To get your token from Notion, login
//             and look for a cookie under www.notion.so with the name `token_v2`.
//             After finding your token and your blog's page id you should be good
//             to go!
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }
export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        className={sharedStyles.avatar}
        src="/avatar.png"
        width="200"
        alt="Zamboni' Photo"
      />
      <h1>Howdy! I am Zamboni!</h1>
      <h2>
        I am a developer/SRE from Brazil 🇧🇷 that solve problems for tech
        companies abroad, remotely.
        {/* <ExtLink
          href="https://github.com/gzamboni"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          remotely
        </ExtLink> */}
      </h2>

      <br />

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={24} />
            </ExtLink>
          )
        })}
      </div>

      {/* <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://zeit.co">ZEIT</ExtLink>. It
          leverages some upcoming features in Next.js like{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/9524">
            SSG support
          </ExtLink>{' '}
          and{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/8626">
            built-in CSS support
          </ExtLink>{' '}
          which allow us to achieve all of the benefits listed above including
          blazing fast speeds, great local editing experience, and always being
          available!
        </p>

        <p>
          Get started by creating a new page in Notion and clicking the deploy
          button below. After you supply your token and the blog index id (the
          page's id in Notion) we will automatically create the table for you!
          See{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog#getting-blog-index-and-token">
            here in the readme
          </ExtLink>{' '}
          for finding the new page's id. To get your token from Notion, login
          and look for a cookie under www.notion.so with the name `token_v2`.
          After finding your token and your blog's page id you should be good to
          go!
        </p>
      </div> */}
    </div>
  </>
)
