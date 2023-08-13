import { Rating } from "@mui/material";
import { getHostReviews } from "../../../../api";
import { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import StarIcon from "@mui/icons-material/Star";
import { useOutletContext } from "react-router-dom";

function Reviews() {
  // const [reviews, setReviews] = useState([]);
  // const { user } = UserAuth();

  // useEffect(() => {
  //   getHostReviews(user).then((reviews) => setReviews(reviews));
  // }, []);

  const [reviews, transactions] = useOutletContext();

  const ReviewsList = reviews.map((review) => (
    <div key={review.id} className="host--review-container">
      <Rating
        sx={{ color: "#FF8C38" }}
        name="read-only"
        value={parseInt(review.stars)}
        readOnly
      />
      <p style={{ color: "#8C8C8C" }}>
        <b style={{ color: "#161616" }}>{review.reviewerName}</b>{" "}
        {review.date.toDate().toDateString()}
      </p>
      <p>{review.description}</p>
    </div>
  ));
  return (
    <div style={{ margin: "20px" }}>
      <h2 className="host--income-header">Reviews</h2>

      <p>
        <b style={{ fontSize: "50px" }}>4.0</b>
        <StarIcon sx={{ color: "#FF8C38" }}></StarIcon>
        Overall rating
      </p>

      <h4>Reviews</h4>

      {ReviewsList}
    </div>
  );
}

export default Reviews;
