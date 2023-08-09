import { NavLink } from "react-router-dom";

function HostGameDetailNav() {
  return (
    <nav style={{ background: "white", fontSize: "12px" }}>
      <ul className="host-nav-ul">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            end
            to="."
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            end
            to="./pricing"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-nsv-ul--link--focus" : "host-nsv-ul--link"
            }
            end
            to="./photos"
          >
            Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HostGameDetailNav;
