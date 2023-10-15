import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Skill from "./pages/skill";
import Interest from "./pages/interest";
import Awards from "./pages/award";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/skills" element={<Skill />}></Route>
        <Route path="/interest" element={<Interest />}></Route>
        <Route path="/awards" element={<Awards />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
