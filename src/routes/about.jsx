import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    <link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>

    <div className="topnav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="portfolio">Portfolio</a>
      </div> 
    
      <h1 className="home">About Me</h1>
      <p id="textabout">
        I am a great designer
      </p>
    
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>
    </>
  );
}
