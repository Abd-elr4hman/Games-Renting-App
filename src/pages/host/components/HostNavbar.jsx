import { NavLink } from "react-router-dom";

function HostNavbar() {
  return (
    <nav className="">
      <ul className="host-nav-ul">
        <li className="">
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            end
            to="/host"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/income"
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/reviews"
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            to="/host/games"
          >
            Games
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HostNavbar;
