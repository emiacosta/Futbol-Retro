import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB74aMiem_ctanB4D9E6DndMii2OeQdEgg",
  authDomain: "futbolretro-ecommerce.firebaseapp.com",
  projectId: "futbolretro-ecommerce",
  storageBucket: "futbolretro-ecommerce.appspot.com",
  messagingSenderId: "1050979490018",
  appId: "1:1050979490018:web:60c5df589f934404d626bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);