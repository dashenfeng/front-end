import {useDispatch,useSelector} from "react-redux"
import { logout } from "../store/reducer/authSlice";
import { useEffect } from "react";


const useAutoLogout = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = auth.expirationTime - Date.now();
    const timer = setTimeout(() => {
      dispatch(logout());
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [auth, dispatch]);
};

export default useAutoLogout;
