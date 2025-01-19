import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './css/mystyle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Abilities from "./pages/Abilities";
import Contact from "./pages/Contact";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;