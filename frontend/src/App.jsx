import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import HostCamp from "./Components/HostCamp/HostCamp";
import HC_HostCampFrom from "./Components/HostCamp/Components/HC_HostCampFrom/HC_HostCampFrom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host-camp" element={<HostCamp />} />
        <Route path="/host-camp-form" element={<HC_HostCampFrom />} />
      </Routes>
    </Router>
  );
}

export default App;
