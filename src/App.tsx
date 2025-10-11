import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PracticeAreas />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
