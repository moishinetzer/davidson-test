import { Link } from "react-router-dom";

export default function portfolio() {
 return (
        <>
      <h1 className="home">portfolio</h1>
      <p>Welcome to my fabulous box</p>
      <Link to={"/about"}>Go to about</Link>
      <Link to={"/contact"}>Go to contact</Link>
      <Link to={"/"}>Go to home</Link>
      </>
      )
 }