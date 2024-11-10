import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKp24TB4CEDuNJt1jjhzILlxwuCaVPVJc",
  authDomain: "private-route-with-fireb-38894.firebaseapp.com",
  projectId: "private-route-with-fireb-38894",
  storageBucket: "private-route-with-fireb-38894.firebasestorage.app",
  messagingSenderId: "510691384901",
  appId: "1:510691384901:web:77c5f978cf2f5c1b4d8d2c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
