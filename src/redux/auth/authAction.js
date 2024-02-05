import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";
import { setUserInfo } from "./authSlice";

export const getUserInfoAction = (uid) => async (dispatch) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          dispatch(setUserInfo({ ...userData, uid: uid }));
        } else {
          toast.error("No user found");
        }


    } catch (e){
        toast.error(`Something went wrong ${e.message}`)
    }
};