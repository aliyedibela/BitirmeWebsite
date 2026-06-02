import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemOverview from './components/SystemOverview';
import ErzurumApp from './components/ErzurumApp';
import Rota25App from './components/Rota25App';
import TechStack from './components/TechStack';
import Download from './components/Download';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <SystemOverview />
        <ErzurumApp />
        <Rota25App />
        <TechStack />
        <Download />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
