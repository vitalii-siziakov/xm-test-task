import calendarIcon from '@images/png/calendar-icon.png';
import clockIcon from '@images/png/clock-icon.png';
import mapPointIcon from '@images/png/map-point-icon.png';

const Details = () => {
  return (
    <div className='event-registration__details'>
      <div className='event-registration__details-item'>
        <div className='event-registration__details-item-inner event-registration__details-date'>
          <img className='event-registration__image' src={calendarIcon} alt='Calendar' />
          <p className='event-registration__details-description'>
            <time className='event-registration__date' dateTime='2022-11-12'>
              12 NOVEMBER 2022
            </time>
          </p>
        </div>
      </div>

      <div className='event-registration__details-item'>
        <div className='event-registration__details-item-inner event-registration__details-time'>
          <img className='event-registration__image' src={clockIcon} alt='Clock' />
          <p className='event-registration__details-description'>
            <time className='event-registration__time' dateTime='2022-11-12T16:00'>
              16:00
            </time>
            {' '}-{' '}
            <time className='event-registration__time' dateTime='2022-11-12T23:00'>
              23:00
            </time>
          </p>
        </div>
      </div>

      <div className='event-registration__details-item'>
        <div className='event-registration__details-item-inner event-registration__details-location'>
          <img className='event-registration__image' src={mapPointIcon} alt='Map Point' />
          <address className='event-registration__details-description event-registration__location'>
            Centara Grand & Bangkok Convention Centre, Bangkok
          </address>
        </div>
      </div>
    </div>
  );
};

export default Details;
