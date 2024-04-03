import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getAllDocs(): Promise<unknown> {
  const querySnapshot = await getDocs(collection(db, "test-collection"));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
}
