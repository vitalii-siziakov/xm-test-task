import './EventRegistration.css';

import Introduction from './components/Introduction/Introduction';
import Details from './components/Details/Details';
import Steps from './components/Steps/Steps';
import Form from './components/Form/Form';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import Note from './components/Note/Note';
import Terms from './components/Terms/Terms';

const EventRegistration = () => {
  return (
    <section className='event__registration'>
      <Introduction />
      <Details />
      <Steps />
      <Form />
      <SuccessMessage />
      <Note />
      <Terms />
    </section>
  );
};

export default EventRegistration;
