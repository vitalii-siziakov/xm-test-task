import './TraderIntroduction.css';

const TraderIntroduction = () => {
  return (
    <section className='trader-introduction'>
      <h2 className='trader-introduction__title'>Trade with</h2>

      <p className='trader-introduction__title-description'>
        <b>Zero Swaps</b> on All XM Ultra Low
      </p>
      <p className='trader-introduction__title-description'>Accounts for more than 25 instruments!</p>

      <p className='trader-introduction__description'>
        Enjoy spreads <b>as low as 0.6 pips</b> and <b>leverage up to 1000:1</b> on instruments like{' '}
        <b>EURUSD, USDJPY, EURJPY, GBPUSD</b>, and <b>Gold.</b>
      </p>

      <a href='/#' className='trader-introduction__open-account-link'>
        Open Account
      </a>

      <p className='trader-introduction__demo'>
        New to trading? Try a{' '}
        <a href='/#' className='trader-introduction__demo-account-link'>
          Demo account.
        </a>
      </p>

      <p className='trader-introduction__terms'>
        Terms and Conditions apply<span className='trader-introduction__terms-accent'>*</span>. To read the full T&Cs,{' '}
        <a href='/#' className='trader-introduction__terms-link'>
          click here
        </a>
        .
      </p>
    </section>
  );
};

export default TraderIntroduction;
