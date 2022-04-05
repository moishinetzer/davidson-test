import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
<link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css"/>

      <h1 className="home">Contact meee!</h1>
      <p>I live somewhere, 020 8988 8998 </p>
      
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>
    </>
  )
}
