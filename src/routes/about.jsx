import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="about">About Me</h1>
      <p id="textabout">
        lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <Link to={"/"}>Go to home</Link>
    </>
  );
}
