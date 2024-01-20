import styles from './Footer.module.css'
import Partners from './components/Partners/Partners'
import Socials from './components/Socials/Socials'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__media}>
        <Partners />
        <Socials />
      </div>
      <hr className={styles.footer__delimiter} />
      <div className={styles.footer__credentials}>
        <Navigation />
        <Logo styles={styles} />
      </div>
    </footer>
  )
}

export default Footer
