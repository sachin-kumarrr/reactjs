import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Instagram from "./components/instagram/Instagram";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CakeView from "./features/cake/CakeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="instagram" element={<Instagram />} />
          <Route path="redux" element={<CakeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
