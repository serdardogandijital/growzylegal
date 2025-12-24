// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0sMzdl6oOatHN6N_tVGBMVQw4HF36WIs",
  authDomain: "growzy-ce790.firebaseapp.com",
  projectId: "growzy-ce790",
  storageBucket: "growzy-ce790.firebasestorage.app",
  messagingSenderId: "105661466786",
  appId: "1:105661466786:web:dc5156930657b497abeffb",
  measurementId: "G-N043WVBBWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
let messaging = null;
try {
  messaging = getMessaging(app);
} catch (error) {
  console.log('Firebase Messaging not supported in this browser:', error);
}

// Export services for use in the app
export { app, auth, db, storage, analytics, messaging };

// Make Firebase available globally for Flutter
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseFirestore = db;
window.firebaseStorage = storage;
window.firebaseAnalytics = analytics;
window.firebaseMessaging = messaging;