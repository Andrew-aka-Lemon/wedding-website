import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection/HeroSection';
import InvitationSection from './components/InvitationSection/InvitationSection';
import DateCountdown from './components/DateCountdown/DateCountdown';
import TimelineSection from './components/TimelineSection/TimelineSection';
import LocationsSection from './components/LocationsSection/LocationsSection';
import ClosingSection from './components/ClosingSection/ClosingSection';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="__container">
        <HeroSection />
        <InvitationSection />
        <DateCountdown />
        <TimelineSection />
      </div>
      <LocationsSection />
      <div className="__container">
        <ClosingSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
