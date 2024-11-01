import { Home, About, Leaderboard, Instructions } from "./pages";
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="all"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
