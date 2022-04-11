import { Link } from "react-router-dom";

export default function Portfolio() {
 return (
        <>
<link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>

<div class="w3-sidebar w3-bar-block" style="width:25%">
  <a href="/" class="w3-bar-item w3-button">Home</a>
  <a href="about" class="w3-bar-item w3-button"></a>
  <a href="portfolio" class="w3-bar-item w3-button">Portfolio</a>
  <a href="contact" class="w3-bar-item w3-button">Contact</a>
</div>

      <div style="margin-left:25%">
      <h1 className="home">Portfolio</h1>
      <p>This is where I show everyone how amazing I am</p>
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>

      <img src="src/images/logo.png" alt="my first logo" />

</div>

      </>
      )
 }
 