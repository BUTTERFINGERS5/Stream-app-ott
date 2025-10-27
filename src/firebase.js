import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDTTiGQ5AJ5Ff5UOclTLN5r59p1gfMV6aI",
  authDomain: "netflix-clone-acc38.firebaseapp.com",
  projectId: "netflix-clone-acc38",
  storageBucket: "netflix-clone-acc38.firebasestorage.app",
  messagingSenderId: "974040317480",
  appId: "1:974040317480:web:aa1bcdd7a7aee4e2e47f1d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
    toast.success("Signup successful!");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

const logout = async () => {
  await signOut(auth);
  toast.info("Logged out!");
};

export { auth, db, signup, login, logout };
