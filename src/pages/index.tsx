import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import DialogFlow from '../components/dialogflow'

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

const dlgflow = {
  intent: 'WELCOME',
}

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        className={contactStyles.avatarFront}
        src="/avatar.png"
        width="200"
        alt="Zamboni's Photo"
      />
      <h1>Howdy! Giovani Zamboni here!</h1>
      <h2>
        I am a developer/SRE from Brazil 🇧🇷
        <br />
        that solve problems for tech companies abroad, remotely.
      </h2>

      <div className="explanation">
        <p>
          I am a mentor of the{' '}
          <ExtLink href="https://www.startupsc.com.br/">StartupSC</ExtLink>{' '}
          program at Sebrae and co-founded{' '}
          <ExtLink href="https://www.jetbov.com">JetBov</ExtLink>, named as one
          of the top startups in Brazil by{' '}
          <ExtLink href="https://revistapegn.globo.com/Startups/noticia/2019/05/100-startups-brasileiras-para-voce-ficar-de-olho.html">
            Época Negócios magazine
          </ExtLink>
          . In addition, he worked for prominent companies such as Datasul (now{' '}
          <ExtLink href="https://www.totvs.com">Totvs</ExtLink>),{' '}
          <ExtLink href="https://www.neogrid.com">NeoGrid</ExtLink> and{' '}
          <ExtLink href="http://www.contaazul.com">ContaAzul</ExtLink>. He
          currently helps computers assist people in their daily activities
          through Artificial Intelligence (like my bot here) on the{' '}
          <ExtLink href="https://www.totvslabs.com">TotvsLabs</ExtLink> team.
        </p>
      </div>

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
    </div>
    <DialogFlow intent="WELCOME" />
  </>
)
