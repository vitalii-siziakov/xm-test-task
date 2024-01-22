import  './Footer.css';
import Partners from './components/Partners/Partners';
import Socials from './components/Socials/Socials';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__media'>
          <Partners />
          <Socials />
        </div>
        <hr className='footer__delimiter' />
        <div className='footer__credentials'>
          <Navigation />
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
