import { firebase, googleAuthProvider } from "../Firebase/firebase-config"
import { AsyncAction, AuthAction, types } from "../Types"
import { Dispatch } from "redux";
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email: string, password: string): AsyncAction => {
  return ( dispatch: Dispatch ): void => {

    dispatch( startLoading() );

    firebase.auth().signInWithEmailAndPassword( email, password )
      .then(({ user }) => {
        dispatch( login( user?.uid!, user?.displayName! ) )
        dispatch( finishLoading() );
      })
      .catch( ( e ) => {
        console.error( e );
        dispatch( finishLoading() );
      });

  };
};

export const startRegisterWithEmailPasswordAndName = (
    name: string,
    email: string,
    password: string
  ): AsyncAction => {
  return ( dispatch: Dispatch ): void => {
    firebase.auth().createUserWithEmailAndPassword( email, password)
      .then( async ({ user }) => {
        await user?.updateProfile({ displayName: name });
        dispatch( login( user?.uid!, user?.displayName! ) );
      })
      .catch( e => console.error( e ) );
  };
};

export const startGoogleLogin = (): AsyncAction => {
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

export const startLogout = (): AsyncAction => {
  return async ( dispatch: Dispatch ) => {
    await firebase.auth().signOut();
    dispatch( logout() );
  };
};

export const logout = (): AuthAction => ({
  type: types.logout,
});
