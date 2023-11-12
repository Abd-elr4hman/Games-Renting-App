import { Navigate, NavLink, useNavigate } from "react-router-dom";
import loginIcon from "../../../src/assets/loginIcon.png";
import logout from "../../../src/assets/logout.png";
import { UserAuth } from "../../context/AuthContext";

import { LuLogOut, LuLogIn } from "react-icons/lu";

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

        <div className="nav-ul">
          <div className="">
            <NavLink
              style={{ color: "black" }}
              className={({ isActive }) =>
                isActive ? "nav-ul--link:focus" : "nav-ul--link"
              }
              to="/games"
            >
              Games
            </NavLink>
          </div>
          <div className="">
            <NavLink
              style={{ color: "black" }}
              className={({ isActive }) =>
                isActive ? "nav-ul--link:focus" : "nav-ul--link"
              }
              to="/host"
            >
              Account
            </NavLink>
          </div>
          <div className="">
            <NavLink
              style={{ color: "black" }}
              className={({ isActive }) =>
                isActive ? "nav-ul--link:focus" : "nav-ul--link"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div>
            {user ? (
              <div>
                <button onClick={handleLogout} className="logout--button">
                  <LuLogOut size={20} color="black" />
                </button>
                {/* <button onClick={fakeLogOut}></button> */}
              </div>
            ) : (
              <NavLink to="/login">
                <LuLogIn size={20} color="black" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
