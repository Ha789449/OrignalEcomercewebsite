// Importing the necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';  // Function to initialize Firebase app
import { getAuth } from 'firebase/auth';        // Function to get Firebase authentication instance

// Firebase configuration object containing your project's settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",  // Unique key for your Firebase project
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // Domain for authentication
  projectId: "YOUR_PROJECT_ID",                     // Unique project identifier
  storageBucket: "YOUR_PROJECT_ID.appspot.com",     // Cloud storage bucket for your project
  messagingSenderId: "YOUR_SENDER_ID",              // Sender ID for Firebase Cloud Messaging
  appId: "YOUR_APP_ID"                               // Unique identifier for your app
};

// Initializing the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Getting the authentication instance for the initialized app
const auth = getAuth(app);

// Exporting the auth instance so it can be used in other parts of the application
export { auth };
