import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  updateProfile,
  signOut,
  getRedirectResult,
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
  limit as firestoreLimit,
} from "firebase/firestore";

import type { ContactFormSchema } from "@/lib/schema";

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

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const logOut = () => {
    signOut(firebaseAuth);
  };
  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const signInWithGoogleRedirect = async () => {
    await signInWithRedirect(firebaseAuth, googleProvider);

    const result = await getRedirectResult(firebaseAuth);
    console.log("redirect result : ", result);
  };

  // Function to view each vendor details [Argument example: photograph, venue]
  // const viewVendors = async (vendorType) => {
  //   // console.log("cliked");
  //   try {
  //     const vendorRef = doc(firestore, "vendors", vendorType + "s");
  //     const objRef = collection(vendorRef, vendorType);
  //     const objSnapshot = await getDocs(objRef);
  //     const venues = objSnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     // console.log("inside firebase", venues);
  //     return venues;
  //   } catch (error) {
  //     console.error("Error viewing:", error);
  //   }
  // };

  const viewVendors = async (vendorType, limit = -1) => {
    try {
      const vendorRef = doc(firestore, "vendors", vendorType + "s");
      const objRef = collection(vendorRef, vendorType);

      let objQuery;
      if (limit !== -1) {
        objQuery = query(objRef, firestoreLimit(limit));
      } else {
        objQuery = objRef;
      }

      const objSnapshot = await getDocs(objQuery);

      const venues = objSnapshot.docs.map((doc) => {
        const data = doc.data() as any;
        return { ...data, id: doc.id };
      });

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
      const imgRef = collection(firestore, "img");
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=15b0ad71016f2b91dcd97a7f1eefee3d",
          {
            method: "POST",
            body: formData,
          },
        );
        const result = await response.json();
        const imageUrl = result.data.url;
        const newImg = {
          imageUrl,
        };
        try {
          const docRef = await addDoc(imgRef, newImg);
        } catch (error) {
          console.log("Error add image to img collection: ", error);
        }
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

  // Function to view images
  const viewImages = async () => {
    try {
      const snapshot = await getDocs(collection(firestore, "img"));
      const im = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return im;
    } catch (error) {
      console.error("Error getting images: ", error);
      return [];
    }
  };

  const readVendorById = async (vendorType, id) => {
    const vendorRef = doc(firestore, "vendors", vendorType + "s");
    const objRef = doc(collection(vendorRef, vendorType), id);
    const objSnapshot = await getDoc(objRef);
    const vendor = objSnapshot.data();
    return vendor;
  };

  const submitConnectForm = async (formData) => {
    await addDoc(collection(firestore, "connect"), formData);
  };

  // Function to query venues
  const queryVenues = async (city: string, category: string) => {
    console.log("from firebase", city, category);
    try {
      const vendorRef = doc(firestore, "vendors", "venues");
      const venueRef = collection(vendorRef, "venue");
      const q = query(
        venueRef,
        where("city", "==", city),
        where("category", "==", category),
      );
      const querySnapshot = await getDocs(q);
      const venues = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return venues;
    } catch (error) {
      console.error("Error querying venues:", error);
      return [];
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signInWithGoogleRedirect,
        logOut,
        user,
        viewVendors,
        createVendor,
        viewImages,
        submitConnectForm,
        readVendorById,
        queryVenues,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
