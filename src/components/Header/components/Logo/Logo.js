import logo from '@images/svg/xm-logo.svg'

const Logo = ({ styles }) => {
  return (
    <a href='/#' className={styles['header__logo']}>
      <img className={styles['header__logo-img']} src={logo} alt='XM Logo' />
    </a>
  )
}

export default Logo
