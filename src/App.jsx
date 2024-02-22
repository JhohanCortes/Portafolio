import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer.jsx";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="text-center text-white mx-auto bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
