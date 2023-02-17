import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, where, addDoc, getDoc, query } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5WbtreAuEvDRfLxsXU5Iz7bCOw8jQXjI",
  authDomain: "countryapp-c4e33.firebaseapp.com",
  projectId: "countryapp-c4e33",
  storageBucket: "countryapp-c4e33.appspot.com",
  messagingSenderId: "476051309441",
  appId: "1:476051309441:web:234cac9f8fa046f4c05e80",
  measurementId: "G-YDPDWJDZ1D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Error Please check your email and password");
  }
};
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // the response gives us an object "user" back
    const user = res.user;
    // const q = query(collection(db, "users"), where("uid", "==", user.id));
    // This will become our fields in the database
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    alert(err);
  }
};
const logout = async () => {
  try {
    await signOut(auth);
    alert("logout success");
  } catch (error) {}
};
export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
