import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Live from "./components/Live/Live";
import Navbar from "./components/Navbar/Navbar";
import Scores from "./components/Scores/Scores";
import Stats from "./components/Stats/Stats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Scores />}></Route>
          <Route path="live" element={<Live />}></Route>
          <Route path="stats" element={<Stats />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
