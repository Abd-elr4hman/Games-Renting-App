import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const checkColor = (description) => {
  switch (description) {
    case "Classic":
      return "black";
    case "Sports":
      return "#115E59";
    case "Action":
      return "#E17654";
    default:
  }
};

function GameDetailPage() {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/games/${params.id}`)
      .then((res) => res.json())
      //   .then((res) => console.log(res));
      .then((data) => setData(data.games));
  }, [params.id]);

  console.log(data);

  return (
    <div>
      <MobileView>
        <div>
          {data ? (
            <div className="detail-container">
              <Link to="/games" style={{ color: "#201F1D" }}>
                &larr; Back to all games
              </Link>
              <img
                src={data.imageUrl}
                className="card-img-top detail-img"
                alt="..."
              ></img>
              <button
                className="card-type"
                style={{ background: `${checkColor(data.type)}` }}
              >
                {data.type}
              </button>
              <h5 className="card-title detail-title">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary detail-price">
                {data.price} EGP/week
              </h6>
              <p className="card-text detail-text">{data.description}</p>
              <button
                className="card-type"
                style={{ background: "#FF8C38", width: "100%" }}
              >
                Rent this game
              </button>
            </div>
          ) : (
            <h2 style={{ margin: "20px" }}>Loading...</h2>
          )}
        </div>
      </MobileView>

      <BrowserView>
        <div>
          {data ? (
            <div className="detail-container-desktop">
              <div>
                <Link to="/games" style={{ color: "#201F1D" }}>
                  &larr; Back to all games
                </Link>
                <img
                  src={data.imageUrl}
                  className="detail-img-desktop"
                  alt="..."
                ></img>
              </div>

              <div className="detail-info">
                <h5 className="">{data.name}</h5>
                <h6 className="">{data.price} EGP/week</h6>
                <p className="">{data.description}</p>
                <button
                  className="card-type"
                  style={{ background: `${checkColor(data.type)}` }}
                >
                  {data.type}
                </button>
                <button
                  className="card-type"
                  style={{ background: "#FF8C38", width: "100%" }}
                >
                  Rent this game
                </button>
              </div>
            </div>
          ) : (
            <h2 style={{ margin: "20px" }}>Loading...</h2>
          )}
        </div>
      </BrowserView>
    </div>
  );
}

export default GameDetailPage;
