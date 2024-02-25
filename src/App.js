import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import LatestNews from "./components/LatestNews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (
    !loading && (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Courses />} path="/Courses"></Route>
          <Route element={<LatestNews />} path="/latestNews"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
          <Route element={<Login />} path="/login"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  );
}

export default App;
