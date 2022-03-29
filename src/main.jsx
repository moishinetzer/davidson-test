import React from "react";
import ReactDOM from "react-dom";
import "./site.css";
import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom";
import Index from "./routes";
import About from "./routes/about";
import Contact from "./routes/contact";
import Portfolio from "./routes/portfolio";
import { render } from "react-dom";
function BlogPost() {
  let {slug} = useParams();
  return <div>Now showing post {slug}</div>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Here is where you can add more routes */}
        {/* Don't forget to import them like above, follow the same pattern */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/:page' component={<Header />} />
        <Route exact path='/' component={<Header />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
render(
  <Router>
    <switch>
      <route exact path="/">
            <Homepage />
      </route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </switch>
  </Router>,
  Node
);

const page = useParams().page || 'index';