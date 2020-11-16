// Libraries
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD71Nmh1bdvgFnWcuVOZtptby5C-07TFhQ',
  authDomain: 'promo-newsletter.firebaseapp.com',
  databaseURL: 'https://promo-newsletter.firebaseio.com',
  projectId: 'promo-newsletter',
  storageBucket: 'promo-newsletter.appspot.com',
  messagingSenderId: '340941350852',
  appId: '1:340941350852:web:dca9038e9c223c78186691',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
