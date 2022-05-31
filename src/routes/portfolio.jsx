import { Link } from "react-router-dom";

export default function Portfolio() {
 return (
        <>
<link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>
<link rel="stylesheet" href="w3.css"/>

<div className="topnav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="portfolio">Portfolio</a>
      </div>

      <div style="margin-left:25%">
      <h1 className="home">Portfolio</h1>
      <p>This is where I show everyone how amazing I am</p>
      </div>
      
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>

      </>
      )
 }
 