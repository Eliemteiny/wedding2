// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDaeJLNQM8bazvG6LINZgl0etMF1-W3uc",
  authDomain: "weddingslideshow-3f936.firebaseapp.com",
  projectId: "weddingslideshow-3f936",
  storageBucket: "weddingslideshow-3f936.appspot.com",
  messagingSenderId: "761314380895",
  appId: "1:761314380895:web:8c4461a0ce6570c46d1fea",
  measurementId: "G-2QQ77C3J4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
