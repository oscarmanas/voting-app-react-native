import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2toiWWSKScfqhO9WccyToLP8jJ534Kb8",
    authDomain: "pranyes-f6823.firebaseapp.com",
    projectId: "pranyes-f6823",
    storageBucket: "pranyes-f6823.appspot.com",
    messagingSenderId: "349145166314",
    appId: "1:349145166314:web:811669d1f66c49cdbb0293",
    measurementId: "G-NE0ZE6PXW7"
}

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)