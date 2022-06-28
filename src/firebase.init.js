import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzdDLvihOIymOfFoBCTB49S5BIJe9ZcJ4",
  authDomain: "manufactuer-fdc99.firebaseapp.com",
  projectId: "manufactuer-fdc99",
  storageBucket: "manufactuer-fdc99.appspot.com",
  messagingSenderId: "524768271701",
  appId: "1:524768271701:web:0c39f76b36afd4ef7ba3dc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
