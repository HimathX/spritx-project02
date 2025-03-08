import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <h1>Spirit11</h1>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/team'>My Team</Link>    
            </div>
        </nav>
    )
}
export default Navbar