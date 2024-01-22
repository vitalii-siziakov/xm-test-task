import './EventRegistration.css';
import { useContext } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';

import Introduction from './components/Introduction/Introduction';
import Details from './components/Details/Details';
import Steps from './components/Steps/Steps';
import Form from './components/Form/Form';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import Note from './components/Note/Note';
import Terms from './components/Terms/Terms';

const EventRegistration = () => {
  const { isRegistrationCompleted } = useContext(EventRegistrationContext);

  return (
    <section className='event__registration'>
      <Introduction />
      <Details />
      {isRegistrationCompleted ? (
        <SuccessMessage />
      ) : (
        <>
          <Steps />
          <Form />
        </>
      )}
      <Note />
      <Terms />
    </section>
  );
};

export default EventRegistration;
