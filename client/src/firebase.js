// Libraries
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_w7KXfRw5AjJyDlglVadLOiMQT7LcyUo',
  authDomain: 'newsletter-app-bd947.firebaseapp.com',
  databaseURL: 'https://newsletter-app-bd947.firebaseio.com',
  projectId: 'newsletter-app-bd947',
  storageBucket: 'newsletter-app-bd947.appspot.com',
  messagingSenderId: '103792910332',
  appId: '1:103792910332:web:7fbc9a80eab594df221c79',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
