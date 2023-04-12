import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
