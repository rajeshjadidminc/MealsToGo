import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCr_guOWZBRjb3pS8vpBLUiCq4T26_416o",
  authDomain: "mealstogo-837ea.firebaseapp.com",
  projectId: "mealstogo-837ea",
  storageBucket: "mealstogo-837ea.appspot.com",
  messagingSenderId: "527263882292",
  appId: "1:527263882292:web:3d6ce1844e8681f5a2fe61",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const loginRequest = (email, password) => {
  console.log(email, password);
  return signInWithEmailAndPassword(auth, email, password);
};
