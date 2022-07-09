import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAmUOwkVSNtZB8kAod9z3nzAzcXv3Rfe3M',
  authDomain: 'linkedin-clone-5b7e0.firebaseapp.com',
  projectId: 'linkedin-clone-5b7e0',
  storageBucket: 'linkedin-clone-5b7e0.appspot.com',
  messagingSenderId: '632940403068',
  appId: '1:632940403068:web:386941d6a45bf45ee5ecf9'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
