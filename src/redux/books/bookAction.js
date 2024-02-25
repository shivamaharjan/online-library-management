import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    // save this book to firebase/API call...
    const collectionRef = collection(db, "books");
    const docRefPromise = addDoc(collectionRef, bookObj);
    toast.promise(docRefPromise, {
      pending: "In Progress...",
    });
    await docRefPromise;
    toast.success("New Book added successfully");
  } catch (e) {
    console.log("error", e);
    toast.error(e.message);
  }
};
