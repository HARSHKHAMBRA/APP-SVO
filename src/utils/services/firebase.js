// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3kN8e_Xa0qIItMUYSKIDrw498YvGCMNU",
    authDomain: "svo-a19ba.firebaseapp.com",
    projectId: "svo-a19ba",
    storageBucket: "svo-a19ba.appspot.com",
    messagingSenderId: "56979122674",
    appId: "1:56979122674:web:f0e9379adcfba923ab636b",
    measurementId: "G-JHTFMXQLB3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
