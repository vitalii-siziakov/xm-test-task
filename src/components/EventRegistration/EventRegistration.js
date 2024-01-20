import './EventRegistration.css';

import Details from './components/Details/Details';
import Steps from './components/Steps/Steps';
import Form from './components/Form/Form';
import Note from './components/Note/Note';
import Terms from './components/Terms/Terms';

const EventRegistration = () => {
  return (
    <section className='event__registration'>
      <Details />
      <Steps />
      <Form />
      <Note />
      <Terms />
    </section>
  );
};

export default EventRegistration;
