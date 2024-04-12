import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  // Function to view each vendor details [Argument example: photograph, venue]
  const viewVendors = async (vendorType) => {
    // console.log("cliked");
    try {
      const vendorRef = doc(firestore, "vendors", vendorType + "s");
      const objRef = collection(vendorRef, vendorType);
      const objSnapshot = await getDocs(objRef);
      const venues = objSnapshot.docs.map((doc) => doc.data());
      console.log(venues);
      return venues;
    } catch (error) {
      console.error("Error viewing:", error);
    }
  };

  // Function to create a new vendor
  const createVendor = async (images, venueData, selectedVendorType) => {
    try {
      const imageUrls = [];
      const vendorRef = doc(firestore, "vendors", selectedVendorType + "s");
      const venuesRef = collection(vendorRef, selectedVendorType);

      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=15b0ad71016f2b91dcd97a7f1eefee3d",
          {
            method: "POST",
            body: formData,
          }
        );
        const result = await response.json();
        const imageUrl = result.data.url;
        imageUrls.push(imageUrl);
      }
      const jsonObject = JSON.parse(venueData);
      jsonObject.urls = imageUrls;
      await addDoc(venuesRef, jsonObject);

      console.log("Venue created successfully!");
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        user,
        viewVendors,
        createVendor,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
