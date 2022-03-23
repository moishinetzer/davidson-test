import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1 className="home">Contact meee!</h1>
      <p>Welcome to my favourite contacts</p>
      <Link to={"/"}>Go to home</Link>
      <Link to={"/about"}>Go to about</Link>
    </>
  )
}
