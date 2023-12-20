import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA839gLGDIIjcZyD5PXVqXmvvglvmdFwAg",
  authDomain: "webcarros-48b86.firebaseapp.com",
  projectId: "webcarros-48b86",
  storageBucket: "webcarros-48b86.appspot.com",
  messagingSenderId: "1059714316780",
  appId: "1:1059714316780:web:a49eaa2463c1874ae968c9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
