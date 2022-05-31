import { Link } from "react-router-dom";

export default function Portfolio() {
<<<<<<< HEAD
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
 
=======
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css" />

      <div className="w3-sidebar w3-bar-block" style={{ width: "25%" }}>
        <a href="/" className="w3-bar-item w3-button">
          Home
        </a>
        <a href="about" className="w3-bar-item w3-button"></a>
        <a href="portfolio" className="w3-bar-item w3-button">
          Portfolio
        </a>
        <a href="contact" className="w3-bar-item w3-button">
          Contact
        </a>
      </div>

      <div style={{ marginLeft: "25%" }}>
        <h1 className="home">Portfolio</h1>
        <p>This is where I show everyone how amazing I am</p>
        <ul className="sidebar">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>{" "}
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>{" "}
          </li>
          <li>
            <Link to={"/portfolio"}>portfolio</Link>{" "}
          </li>
        </ul>

        <img src="src/images/logo.png" alt="my first logo" />
      </div>
    </>
  );
}
>>>>>>> bc99ca786015245e9a0401ac9ad419b1dc22834b
