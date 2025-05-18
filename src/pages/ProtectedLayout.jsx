import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { addUser, removeUser } from "../utils/userSlice";

const ProtectedLayout = () => {
  //Firebase AuthListner
  //This AuthListner is subscribed to redux store that manages the state of user
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        dispatch(addUser({ uid: uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

  }, []);

  return <Outlet />;
};

export default ProtectedLayout;
