import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
     
          <Link to="/">Home</Link>

       
          <Link to="/contato">Contato</Link>
     
         
    </nav>
  );
}

export default Nav;