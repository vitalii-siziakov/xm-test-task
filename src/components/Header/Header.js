import styles from './Header.module.css'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo styles={styles} />
      <Navigation styles={styles} />
    </header>
  )
}

export default Header
