import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import Router from 'next/router';
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NODE_ENV == "development" ? "opensourcesocialmedia.firebaseapp.com" : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export const getFirebaseAuth = () => {
    return auth;
}

export const setLoginCookie = async () => {
    await auth.currentUser!.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
        cookies.set('loginCookie', idToken);
    }).catch(async function(error) {
        await logoutUser();
    });
}

export const getLoginCookie = () => {
    return cookies.get('loginCookie');
}

export const logoutUser = async () => {
    cookies.remove('loginCookie', { path: '/' });

    await signOut(auth)
    .then(() => {
        // Success
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    Router.replace('/login');
}
