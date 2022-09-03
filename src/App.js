import Footer from './components/Footer';
import HeroSection from './components/heroSection/Index';
import InteractiveVR from './components/InteractiveVR';
import Creations from './components/Creations';

function App() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <InteractiveVR />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
