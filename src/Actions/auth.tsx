import { firebase, googleAuthProvider } from "../Firebase/firebase-config"
import { AuthAction, types } from "../Types"
import { Dispatch } from "redux";

export const startLoginEmailPassword = (email: string, password: string): ( dispatch: Dispatch ) => void => {
  return ( dispatch: Dispatch ): void => {
    setTimeout(() => {
      dispatch( login("123", "JohnDoe") )
    }, 3000);
  };
};

export const startRegisterWithEmailPasswordAndName = (name: string, email: string, password: string) => {
  return ( dispatch: Dispatch ): void => {
    firebase.auth().createUserWithEmailAndPassword( email, password)
      .then( async ({ user }) => {
        await user?.updateProfile({ displayName: name });
        dispatch( login( user?.uid!, user?.displayName! ) );
      })
      .catch( e => console.error( e ) );
  };
};

export const startGoogleLogin = (): ( dispatch: Dispatch ) => void => {
  return ( dispatch: Dispatch ) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then(({ user }) => {
        dispatch( login(user?.uid!, user?.displayName!) )
      });
  }
};

export const login = (uid: string, displayName: string): AuthAction => ({
  type: types.login,
  payload: { uid, displayName }
});

export const logout = (): AuthAction => ({
  type: types.logout,
});
