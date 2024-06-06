import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQHUYggDJQe5zqyCc-nKhSb-FldI0Is0",
  authDomain: "evaluacion1-73ee4.firebaseapp.com",
  projectId: "evaluacion1-73ee4",
  storageBucket: "evaluacion1-73ee4.appspot.com",
  messagingSenderId: "410641936654",
  appId: "1:410641936654:web:04dbd99572f84a60ac275f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});