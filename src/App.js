import { MainContextProvider } from './contexts/MainContext';
import Header from '@components/Header/Header';
import MainBackground from './components/MainBackground/MainBackground';
import TraderIntroduction from '@components/TraderIntroduction/TraderIntroduction';
import Cryptocurrencies from '@components/Cryptocurrencies/Cryptocurrencies';
import TraderBenefits from '@components/TraderBenefits/TraderBenefits';
import EventRegistration from '@components/EventRegistration/EventRegistration';
import EventGallery from '@components/EventGallery/EventGallery';
import BrokerFeatures from '@components/BrokerFeatures/BrokerFeatures';
import Footer from '@components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <MainContextProvider>
        <Header />
        <main className='main'>
          <MainBackground />
          <TraderIntroduction />
          <Cryptocurrencies />
          <TraderBenefits />
          <EventRegistration />
          <EventGallery />
          <BrokerFeatures />
        </main>
        <Footer />
      </MainContextProvider>
    </div>
  );
}

export default App;
