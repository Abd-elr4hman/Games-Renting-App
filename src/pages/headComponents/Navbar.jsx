import { Navigate, NavLink, useNavigate } from "react-router-dom";
import loginIcon from "../../../src/assets/loginIcon.png";
import logout from "../../../src/assets/logout.png";
import { UserAuth } from "../../context/AuthContext";

// function fakeLogOut() {
//   localStorage.removeItem("loggedin");
// }

function Navbar() {
  // const isLoggedIn = localStorage.getItem("loggedin");
  const navigate = useNavigate();
  const { logOut, user } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
      console.log("you are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="">
      <div className="nav">
        <NavLink className="nav-brand" to="/">
          GameShare
        </NavLink>

        <ul className="nav">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "host-nsv-ul--link--focus" : "nav-ul--link"
              }
              to="/games"
            >
              Games
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "host-nsv-ul--link--focus" : "nav-ul--link"
              }
              to="/host"
            >
              Account
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "host-nsv-ul--link--focus" : "nav-ul--link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            {user ? (
              <div>
                <button onClick={handleLogout} className="logout--button">
                  <img src={logout} className="login-icon" />
                </button>
                {/* <button onClick={fakeLogOut}></button> */}
              </div>
            ) : (
              <NavLink to="/login">
                <img src={loginIcon} className="login-icon" />
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
