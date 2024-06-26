import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import FavSpot from './components/FavSpot';
import Surfspot from './components/Surfspot';
import Spot from './components/Spot';

function App() {
  return (
    <Router>
      <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/favorites/:id" element={<FavSpot />} />
              <Route path="/surfspots" element={<Surfspot />} />
              <Route path="/surfspots/:id" element={<Spot />} />
            </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
