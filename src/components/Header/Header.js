import './Header.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Logo  />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
