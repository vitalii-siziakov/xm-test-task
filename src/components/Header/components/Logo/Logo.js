import logo from '@images/svg/xm-logo.svg'

const Logo = () => {
  return (
    <a href='/#' className='header__logo'>
      <img className='header__logo-img' src={logo} alt='XM Logo' />
    </a>
  )
}

export default Logo
