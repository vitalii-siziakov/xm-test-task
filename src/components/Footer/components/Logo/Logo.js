import tradingPointLogo from '@images/png/trading-point-logo.png'

const Logo = ({ styles }) => {
  return (
    <a href='/#' className={styles['footer__logo']}>
      <img src={tradingPointLogo} alt='TradingPoint Logo' className={styles['footer__logo-img']} />
    </a>
  )
}

export default Logo
