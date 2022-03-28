import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="about">About Me</h1>
      <p id="textabout">
        lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    
      <ul className="sidebar">
      <li><Link to={"/"}>Go to home</Link></li>
      <li><Link to={"/about"}>Go to about</Link> </li>
      <li><Link to={"/contact"}>Go to contact</Link> </li>
      <li><Link to={"/portfolio"}>Go to portfolio</Link> </li>
      </ul>
    </>
  );
}
