// firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC97v06Z-PA948toWXxuspjlZ3JfBeBIJ8",
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: "smart-e-commerce-f4f60",
  storageBucket: "smart-e-commerce-f4f60.firebasestorage.app", 
  messagingSenderId: "298440808109",
  appId: "1:298440808109:android:700d9a00ee9de048ba5824",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
