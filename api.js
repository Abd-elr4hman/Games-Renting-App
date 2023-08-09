import { firestore } from "./src/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { UserAuth } from "./src/context/AuthContext";

const gamesCollectionRef = collection(firestore, "games");

export async function getGames() {
  const snapshot = await getDocs(gamesCollectionRef);
  const games = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return games;
}

export async function getGame(id) {
  const dofRef = doc(firestore, "games", id);
  const snapeshot = await getDoc(dofRef);
  // console.log(snapeshot.data());

  const game = { ...snapeshot.data(), id: snapeshot.id };
  // console.log(game);
  return game;
}

export async function getHostGames(user) {
  const q = query(gamesCollectionRef, where("hostId", "==", user.uid));
  const snapshot = await getDocs(q);
  const games = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(games);
  return games;
}

// export async function getGames() {
//   const res = await fetch("api/games");
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch games",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.games;
// }

// export async function loginUser(creds) {
//   const res = await fetch("/api/login", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   return data;
// }
