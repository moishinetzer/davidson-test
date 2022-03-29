import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
    
    <link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>

      <h1 className="home">Home Page</h1>
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
