import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg nav">
      <div class="container-fluid ">
        <Link class="navbar-brand" to="/">
          GameShare
        </Link>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* class="collapse navbar-collapse" */}
        <div id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
