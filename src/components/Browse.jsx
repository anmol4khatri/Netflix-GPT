import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
        <h1>Browse aaygya</h1>
        <button onClick={handleLogout} className='cursor-pointer bg-amber-400 text-2xl'>Logout</button>
    </div>
  )
}

export default Browse;