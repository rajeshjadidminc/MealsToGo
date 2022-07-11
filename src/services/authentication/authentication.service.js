import firebaseAuth from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const logOut = () => {
  return signOut(firebaseAuth);
};

export const authChange = () => {
  return onAuthStateChanged();
};
