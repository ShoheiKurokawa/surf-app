import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';



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
            </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
