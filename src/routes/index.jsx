import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1 className="home">Home Page</h1>
      <p>Welcome to my fabulous box</p>
      <Link to={"/about"}>Go to about</Link>
      <Link to={"/contact"}>Go to contact</Link>

      <div className="Name">
    <p>Yehudah Davidson</p>
   </div>

<div> 
<h3 className="title">Graphic Designer</h3>
</div>

<div>
<h3 className="title2">  07552 749 955</h3>
</div>

<div className="sidebar">
<ul>
<li> <a href="home">Home</a> </li>
<li> <a href=About>About</a> </li>
<li><a href=Portfolio>Portfolio</a></li>
<li><a href= Contact>Contact</a></li>
</ul>
    </>
    
  );
}

