import { Link } from "react-router-dom";

export default function Portfolio() {
 return (
        <>
<link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>

      <h1 className="home">Portfolio</h1>
      <p>This is where I show everyone how amazing I am</p>
     
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>

      </>
      )
 }