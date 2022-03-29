import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    <link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>
    
      <h1 className="about">About Me</h1>
      <p id="textabout">
        lorem ipsum dolor sit amet consectetur adipisicing elit
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
