import React from "react";
import ReactDOM from "react-dom";
import "./site.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./routes";
import About from "./routes/about";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Here is where you can add more routes */}
        {/* Don't forget to import them like above, follow the same pattern */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
