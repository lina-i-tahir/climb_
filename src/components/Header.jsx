import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            home
          </Link>
        </div>
      </nav>
      <h1> where's your next climb?</h1>
      <h3>find your next adventure by scrolling the list</h3>
    </header>
  );
};

export default Header;
