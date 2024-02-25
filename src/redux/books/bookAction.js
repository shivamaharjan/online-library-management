import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setBooks } from "./bookSlice";

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

export const getAllBookAction = () => async (dispatch) => {
  // Grab all books from firebase
  // Set the books to booklist in our store
  try {
    const bookRef = collection(db, "books");
    const bookSnapSnot = await getDocs(bookRef);
    const books = [];
    bookSnapSnot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      books.push({ ...data, id });
    });
    // Set book info to our redux store
    dispatch(setBooks(books));
  } catch (e) {
    console.log("Error", e);
    toast.error(e.message);
  }
};
