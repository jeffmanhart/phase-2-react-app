import React from "react";
import { NavLink} from "react-router-dom";

const NavBar = () => {
const links = ["weather", "locations", "about"];

  return ( <nav>
    {links.map((e)=> {
    return <NavLink 
        to={'/' + e}
        className="nav-link" >
            {e.toUpperCase()}
        </NavLink>}
    )}
  </nav>)
};

export default NavBar;