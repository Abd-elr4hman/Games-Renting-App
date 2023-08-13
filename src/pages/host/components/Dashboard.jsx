import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function Dashboard() {
  const [reviews, transactions, games] = useOutletContext();

  var amountSum = 0;
  transactions.map((transaction) => {
    amountSum = amountSum + transaction.amount;
  });

  const listedGames = games.map((game) => (
    <div className="host--dashboard--listed-games--card">
      <div className="host--dashboard--listed-games--card--img">
        <img
          style={{ width: "70px", padding: "10px" }}
          src={game.imageUrl}
          alt=""
        />
      </div>
      <div className="host--dashboard--listed-games--card--info">
        <p>
          <b>{game.name}</b>
        </p>
        <p>{game.price} EGP/Day</p>
      </div>
      <div className="host--dashboard--listed-games--card--detail ">
        <Link
          to={`/host/games/${game.id}`}
          className="host-dashbored--income--details-text"
        >
          View details
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="host-dashbored">
      <div className="host-dashbored--income">
        <div>
          <h1>welcome</h1>
          <p>All time income</p>
          <h1>{amountSum} EGP</h1>
        </div>
        <div className="host-dashbored--income--details-container">
          <Link to="./income" className="host-dashbored--income--details-text">
            Details
          </Link>
        </div>
      </div>
      <div className="host-dashbored--review--container">
        <p>
          <b style={{ fontSize: "20px" }}>Review scores</b>{" "}
          <StarIcon sx={{ color: "#FF8C38" }}></StarIcon>
          4.0/5
        </p>
        <Link
          to="./reviews"
          className="host-dashbored--income--details-container host-dashbored--income--details-text"
        >
          Details
        </Link>
      </div>
      <div className="host-dashboard--listed-games-container">
        <div className="host-dashboard--listed-games-header">
          <p>
            <b style={{ fontSize: "20px" }}>Your listed games</b>
          </p>
          <Link
            to="./games"
            className="host-dashbored--income--details-container host-dashbored--income--details-text"
          >
            View all
          </Link>
        </div>
        <div className="host-dashboard--listed-games">{listedGames}</div>
      </div>
    </div>
  );
}

export default Dashboard;
