import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJrxcLZosiwxDhtuLnBgOfdgGA0uqATBY",
  authDomain: "nba-wb.firebaseapp.com",
  projectId: "nba-wb",
  storageBucket: "nba-wb.appspot.com",
  messagingSenderId: "948927382995",
  appId: "1:948927382995:web:8e97cbf4f36f785b76db26",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
