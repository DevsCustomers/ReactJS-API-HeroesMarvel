import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import routes
import { Home } from "./routes/Home";
// import { About } from "./routes/About";
import { HeroDetails } from "./routes/HeroDetails";

// Import Components
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} /> 
        {/* <Route path={"about"} element={<About />} /> */}
        <Route path={"/:id"} element={<HeroDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
