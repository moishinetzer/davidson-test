import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1 className="home">Home Page</h1>
      <p>Welcome to my fabulous box</p>
      <Link to={"/about"}>Go to about</Link>
    </>
  );
}
