import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spirit11</h1>
      <div className="nav-links">
        <NavLink to="/"  ClassName="active">Home</NavLink>
        <NavLink to="/dashboard" ClassName="active">Dashboard</NavLink>
        <NavLink to="/leaderboard" ClassName="active">Leaderboard</NavLink>
        <NavLink to="/team" ClassName="active">My Team</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
