import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1 className="home">Contact meee!</h1>
      <p>Welcome to my favourite contacts</p>
      
      <ul className="sidebar">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link> </li>
      <li><Link to={"/contact"}>contact</Link> </li>
      <li><Link to={"/portfolio"}>portfolio</Link> </li>
      </ul>
    </>
  )
}
