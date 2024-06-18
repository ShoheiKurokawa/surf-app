import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
            {/* <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
            </Routes> */}
    </Router>
  );
}

export default App;
