// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxi0t6qrTt0rParHNKJfjrhT_fASJQPms',
  authDomain: 'cooking-wilmer.firebaseapp.com',
  projectId: 'cooking-wilmer',
  storageBucket: 'cooking-wilmer.appspot.com',
  messagingSenderId: '889403323069',
  appId: '1:889403323069:web:241b19a917ed0196067dd4'
};

// Init Firebase - Connect to the backend
const app = initializeApp(firebaseConfig);

// Init Services FireStore

const db = getFirestore(app);

export { db };
