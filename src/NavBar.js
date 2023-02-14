import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import mind from './images/mind.jpg';

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <nav>
            {/* <h4>Mind Matters</h4> */}
            <ul className="nav-adjust">
                <div className="logo-div">
                    <img src={mind} alt="Main logo" />
                </div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/scope">Scope</Link>
                </li>
            </ul>
            <div className="nav-right">
                {user
                    ? <button onClick={() => {
                        signOut(getAuth());
                    }}>Log Out</button> : <button onClick={() => {
                        navigate('/login');
                    }}>Log In</button>}
            </div>
        </nav>
    );
}

export default NavBar;