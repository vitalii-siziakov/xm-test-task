import { MainContextProvider } from './contexts/MainContext';
import Header from '@components/Header/Header';
import Cryptocurrencies from '@components/Cryptocurrencies/Cryptocurrencies';
import TraderBenefits from './components/TraderBenefits/TraderBenefits';
import EventRegistration from './components/EventRegistration/EventRegistration';
import EventGallery from './components/EventGallery/EventGallery';
import BrokerFeatures from '@components/BrokerFeatures/BrokerFeatures';
import Footer from '@components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <MainContextProvider>
        <Header />
        <Cryptocurrencies />
        <TraderBenefits />
        <EventRegistration />
        <EventGallery />
        <BrokerFeatures />
        <Footer />
      </MainContextProvider>
    </div>
  );
}

export default App;
