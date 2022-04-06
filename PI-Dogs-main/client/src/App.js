import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import Detail from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/dog" element={<DogCreate />} />
          <Route exact path="/home/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
