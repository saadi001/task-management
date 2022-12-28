// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9cTI-TcRiYXaE0bNN3TqDpU5xSlkgNY",
  authDomain: "task-management-1988c.firebaseapp.com",
  projectId: "task-management-1988c",
  storageBucket: "task-management-1988c.appspot.com",
  messagingSenderId: "1066548133323",
  appId: "1:1066548133323:web:c8eb07655aa1615b298a4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app