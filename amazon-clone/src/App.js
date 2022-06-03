import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import { BrowserRouter as Router}  from "react-router-dom";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Home />} />
      </Routes>    
    </Router>
  );
}

export default App;
