import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyBuCy9hVxZfVu9UwvIcren6ktbxNIi_eqM',
  authDomain: 'react-image-upload-d018c.firebaseapp.com',
  projectId: 'react-image-upload-d018c',
  storageBucket: 'react-image-upload-d018c.appspot.com',
  messagingSenderId: '798235521691',
  appId: '1:798235521691:web:40be02381110be704f8c3e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let storage = firebase.storage();

export { storage, firebase as default };
