import { NavLink } from "react-router-dom";

function HostNavbar() {
  return (
    <nav className="">
      <div className="host-nav-ul">
        <div className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            end
            to="/host"
          >
            Dashboard
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/income"
          >
            Income
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/reviews"
          >
            Reviews
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/games"
          >
            Games
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default HostNavbar;
