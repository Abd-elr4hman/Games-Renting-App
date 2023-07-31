import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="container-fluid main">
      <div className="d-flex justify-content-center">
        <h1 className="main-title">Sharing Video games is easier than ever!</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p className="main-text">
          Browse a huge collections of games for rental, and have the game
          delivered to you door step in no time!
        </p>
      </div>

      <div className="d-flex justify-content-center">
        {/* <button class="btn main-button ">Find Games</button> */}
        <Link to="/games" className="btn btn-primary main-button home-button">
          Find Games
        </Link>
      </div>
    </main>
  );
}

export default Main;
