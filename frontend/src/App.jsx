import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import HostCamp from "./Components/HostCamp/HostCamp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host-camp" element={<HostCamp />} />
      </Routes>
    </Router>
  );
}

export default App;