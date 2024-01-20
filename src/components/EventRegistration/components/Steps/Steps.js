const Steps = () => {
  return (
    <div className='event-registration-steps'>
      <div className='event-registration-step'>
        <span className='event-registration-step__number event-registration-step__number--active'>1</span>
        <p className='event-registration-step__description'>Step 1</p>
        <progress className='event-registration-step__progress' max='100' value='50' />{' '}
      </div>

      <div className='event-registration-step'>
        <span className='event-registration-step__number'>2</span>
        <p className='event-registration-step__description'>Step 2</p>
        <progress className='event-registration-step__progress' max='100' value='0' />
      </div>
    </div>
  );
};

export default Steps;
