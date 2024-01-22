import tradingPointLogo from '@images/png/trading-point-logo.png';

const Logo = () => {
  return (
    <a href='/#' className='footer__logo'>
      <img src={tradingPointLogo} alt='TradingPoint Logo' className='footer__logo-img' />
    </a>
  );
};

export default Logo;
