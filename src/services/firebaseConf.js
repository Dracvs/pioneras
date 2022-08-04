import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const app = firebase.initializeApp({
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    locationId:process.env.REACT_APP_FIREBASE_LOCATIONID,
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
})

export const db_firestore= getFirestore(app)
