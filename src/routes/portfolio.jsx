import { Link } from "react-router-dom";

export default function Portfolio() {
 return (
        <>
      <h1 className="home">Portfolio</h1>
      <p>Welcome to my fabulous box</p>
     
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>

      </>
      )
 }