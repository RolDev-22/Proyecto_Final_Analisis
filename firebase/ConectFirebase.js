import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaUubNiNMl7Ab4I2dk5ZXjwEuy7U6dNcM",
  authDomain: "basesoda-ba5fa.firebaseapp.com",
  projectId: "basesoda-ba5fa",
  storageBucket: "basesoda-ba5fa.appspot.com",
  messagingSenderId: "792900019566",
  appId: "1:792900019566:web:c62acc28f79b2c443c0d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { app, db };
