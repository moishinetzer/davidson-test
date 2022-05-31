import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/rwh2pbj.css" />

      <div className="topnav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="portfolio">Portfolio</a>
      </div>

      <div className="topnav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="portfolio">Portfolio</a>
      </div>

      <h1 className="home">Home Page</h1>
      <p className="subtitle">Welcome to my fabulous box</p>

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

      <p className="aboutme bg-black text-white">
        My name is Yehudah Davidson and I am a graphic designer. My skills
        include brand and logo design, website development and image editing and
        compositing
      </p>
    </>
  );
}
