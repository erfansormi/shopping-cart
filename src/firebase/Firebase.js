import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAQM73agGFkAbQxj08edMNmAtEGFoXD8-o",
    authDomain: "online-shop-74d78.firebaseapp.com",
    projectId: "online-shop-74d78",
    storageBucket: "online-shop-74d78.appspot.com",
    messagingSenderId: "163000088225",
    appId: "1:163000088225:web:68aff48e59976b9b1162e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


