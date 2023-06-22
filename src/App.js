import logo from './logo.svg';
import './App.css';

import Navbars from './components/Navbar';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Service from "./pages/Service"
import Recommendations from "./pages/Recommendations"
import Blogs from "./pages/Blogs"
import Navbar from "./components/Navbar"



function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendation" element={<Recommendations />} />
        <Route path="blogs/" element={<Blogs />} />
        <Route path="/*" element={<h1>page not found</h1>} />

        
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
