import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
export const SignUpUsingGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const { displayName, email } = result.user;
      setUserData({ displayName, email });
      setIsLoggedIn(true);
    })
    .catch((error) => {
      console.log({ error });
    });
};

export const Logout = () => {
  signOut(auth)
    .then(() => {
      setUserData({});
      setIsLoggedIn(false);
    })
    .catch((error) => {
      console.log({ error });
    });
};
