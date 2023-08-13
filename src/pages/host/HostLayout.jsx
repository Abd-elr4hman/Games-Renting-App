import { Outlet } from "react-router-dom";
import HostNavbar from "./components/HostNavbar";

import { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

import { getHostReviews } from "../../../api";
import { getHostTransactions } from "../../../api";
import { getHostGames } from "../../../api";

function HostLayout() {
  // reviews
  const [reviews, setReviews] = useState([]);
  const { user } = UserAuth();

  // income
  const [transactions, setTransactions] = useState([]);

  // games
  const [games, setGames] = useState([]);

  useEffect(() => {
    try {
      getHostGames(user).then((games) => setGames(games));
      getHostReviews(user).then((reviews) => setReviews(reviews));
      getHostTransactions(user).then((transactions) =>
        setTransactions(transactions)
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <HostNavbar />
      <Outlet context={[reviews, transactions, games]} />
    </>
  );
}

export default HostLayout;
