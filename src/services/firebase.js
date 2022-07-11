import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr_guOWZBRjb3pS8vpBLUiCq4T26_416o",
  authDomain: "mealstogo-837ea.firebaseapp.com",
  projectId: "mealstogo-837ea",
  storageBucket: "mealstogo-837ea.appspot.com",
  messagingSenderId: "527263882292",
  appId: "1:527263882292:web:3d6ce1844e8681f5a2fe61",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;
