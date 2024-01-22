import './MainBackground.css';
import greenZeroNumber from '@images/svg/green-zero-number.svg';
import violetCube from '@images/svg/violet-cube.svg';
import blueCup from '@images/svg/blue-cup.svg';
import perforatedRing from '@images/svg/perforated-ring.svg';
import roseZeroNumber from '@images/svg/rose-zero-number.svg';
import purpleCube from '@images/svg/purple-cube.svg';
import violetZeroNumber from '@images/svg/violet-zero-number.svg';
import greenVector from '@images/svg/green-vector.svg';
import purpleBlur from '@images/svg/purple-blur.svg';
import greenBlur from '@images/svg/green-blur.svg';

const MainBackground = () => {
  return (
    <div className='main-background'>
      <div className='main-background__container'>
        <img className='main-background__green-zero-number' src={greenZeroNumber} alt='Green zero number' />
        <img className='main-background__violet-cube' src={violetCube} alt='Violet cube' />
        <img className='main-background__blue-cup' src={blueCup} alt='Blue cup' />
        <img className='main-background__perforated-ring' src={perforatedRing} alt='Perforated ring' />
        <img className='main-background__rose-zero-number' src={roseZeroNumber} alt='Rose zero number' />
        <img className='main-background__purple-cube' src={purpleCube} alt='Purple cube' />
        <img className='main-background__violet-zero-number' src={violetZeroNumber} alt='Violet zero number' />
        <img className='main-background__green-vector' src={greenVector} alt='Green vector' />
        <img className='main-background__purple-blur' src={purpleBlur} alt='Purple blur' />
        <img className='main-background__green-blur' src={greenBlur} alt='Green blur' />
      </div>
      <div className='main-background__gradient'></div>
    </div>
  );
};

export default MainBackground;
