// import './App.css'

import Member from './components/Member'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/member" element={<Member />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;


