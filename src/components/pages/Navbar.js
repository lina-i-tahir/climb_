import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/clist">climbs</NavLink>
        <NavLink to="/mappage">map</NavLink>
      </div>
    </>
  );
};

export default Navbar;
