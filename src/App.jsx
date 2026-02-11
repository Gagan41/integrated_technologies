import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

import About from './pages/About';

// Placeholder components for now
const Track = () => <div className="pt-32 min-h-screen text-center text-3xl font-bold">Track Your Repair (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="track" element={<Track />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div className="pt-32 text-center text-2xl">404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
