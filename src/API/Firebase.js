import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNh_s3p1jWrCKUr_IZxrGgMT_uOwMUzg4",
  authDomain: "password-manager-100ca.firebaseapp.com",
  projectId: "password-manager-100ca",
  storageBucket: "password-manager-100ca.appspot.com",
  messagingSenderId: "120274811246",
  appId: "1:120274811246:web:847933b62df9fc14b1697f",
  measurementId: "G-WVHDMXLSMC",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
