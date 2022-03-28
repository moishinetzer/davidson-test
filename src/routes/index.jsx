import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1 className="home">Home Page</h1>
      <p>Welcome to my fabulous box</p>

      <ul className="sidebar">
      <li><Link to={"/about"}>Go to about</Link> </li>
      <li><Link to={"/contact"}>Go to contact</Link> </li>
      <li><Link to={"/portfolio"}>Go to portfolio</Link> </li>
      </ul>
    
    
    
      </>
      )
    }
