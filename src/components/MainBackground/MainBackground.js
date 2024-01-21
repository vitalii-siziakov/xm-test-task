import './MainBackground.css';
import greenZeroNumber from '@images/svg/green-zero-number.svg';
import violetCube from '@images/svg/violet-cube.svg';
import blueCup from '@images/svg/blue-cup.svg';
import perforatedRing from '@images/svg/perforated-ring.svg';
import roseZeroNumber from '@images/svg/rose-zero-number.svg';
import purpleCube from '@images/svg/purple-cube.svg';
import violetZeroNumber from '@images/svg/violet-zero-number.svg';
import greenVector from '@images/svg/green-vector.svg';

const MainBackground = () => {
  return (
    <div className='main-background'>
      <img className='main-background__green-zero-number' src={greenZeroNumber} alt='Green zero number' />
      <img className='main-background__violet-cube' src={violetCube} alt='Violet cube' />
      <img className='main-background__blue-cup' src={blueCup} alt='Blue cup' />
      <img className='main-background__perforated-ring' src={perforatedRing} alt='Perforated ring' />
      <img className='main-background__rose-zero-number' src={roseZeroNumber} alt='Rose zero number' />
      <img className='main-background__purple-cube' src={purpleCube} alt='Purple cube' />
      <img className='main-background__violet-zero-number' src={violetZeroNumber} alt='Violet zero number' />
      <img className='main-background__green-vector' src={greenVector} alt='Green vector' />
    </div>
  );
};

export default MainBackground;
