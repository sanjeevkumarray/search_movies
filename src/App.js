import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchMovies from "./components/SearchMovies";
import Playlist from "./components/Playlist";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search Movies</Link>
            </li>
            <li>
              <Link to="/playlist">Playlist</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
     

  );
}

export default App;
