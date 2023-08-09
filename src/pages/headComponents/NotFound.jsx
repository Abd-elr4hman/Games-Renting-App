import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>Sorry the page you were looking for was not found.</h1>
      <Link className="btn btn-primary notfound-btn" to="/">
        Back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
