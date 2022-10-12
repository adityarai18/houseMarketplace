import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBllIWzJA3O8DfbcioqvMx2cBSrDoKoTho',
  authDomain: 'house-marketplace-app-6ecf5.firebaseapp.com',
  projectId: 'house-marketplace-app-6ecf5',
  storageBucket: 'house-marketplace-app-6ecf5.appspot.com',
  messagingSenderId: '104800382856',
  appId: '1:104800382856:web:55f34d51ecaa5a8730543d',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
