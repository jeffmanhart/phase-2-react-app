import React from "react";
import { NavLink} from "react-router-dom";

const NavBar = () => {
const links = ["bored", "activities", "about"];

  return ( <nav>
    {links.map((e)=> {
    return <NavLink 
        to={'/' + e}
        className="nav-link" 
        key={e}>
            {e.toUpperCase()}
        </NavLink>}
    )}
  </nav>)
};

export default NavBar;