import { useContext } from 'react';
import { MainContext } from '@contexts/MainContext';

const Steps = () => {
  const { registrationStep, firstRegistrationStepProgress, secondRegistrationStepProgress } = useContext(MainContext);

  return (
    <div className='event-registration-steps' data-step={registrationStep}>
      <div className='event-registration-step'>
        <span className={`event-registration-step__number ${registrationStep >= 1 && 'event-registration-step__number--active'}`}>
          1
        </span>
        <p className='event-registration-step__description'>Step 1</p>
        <progress
          className='event-registration-step__progress'
          max='100'
          value={registrationStep > 1 ? 100 : firstRegistrationStepProgress}
        />
      </div>

      <div className='event-registration-step'>
        <span className={`event-registration-step__number ${registrationStep >= 2 && 'event-registration-step__number--active'}`}>
          2
        </span>
        <p className='event-registration-step__description'>Step 2</p>
        <progress
          className='event-registration-step__progress'
          max='100'
          value={registrationStep > 2 ? 100 : secondRegistrationStepProgress}
        />
      </div>
    </div>
  );
};

export default Steps;
