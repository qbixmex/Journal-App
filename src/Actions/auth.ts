import { firebase, googleAuthProvider } from "../Firebase/firebase-config"
import { AsyncAction, AuthAction, types } from "../Types"
import { Dispatch } from "redux";
import Swal from "sweetalert2";

import { startLoading, finishLoading } from './ui';
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email: string, password: string): AsyncAction => {
  return ( dispatch: Dispatch ): void => {

    dispatch( startLoading() );

    firebase.auth().signInWithEmailAndPassword( email, password )
      .then(({ user }) => {
        if ( user?.uid && user?.displayName) {
          dispatch( login( user.uid, user.displayName ) )
        }
        dispatch( finishLoading() );
      })
      .catch( e => {
        dispatch( finishLoading() );
        Swal.fire( "Error", "There is no user record corresponding to this credentials", "error" );
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
        if ( user?.uid && user?.displayName) {
          dispatch( login( user.uid, user.displayName ) );
        }
      })
      .catch( e => {
        Swal.fire( "Error", "The email address is already in use by another account", "error" );
      });
  };
};

export const startGoogleLogin = (): AsyncAction => {
  return ( dispatch: Dispatch ) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then(({ user }) => {
        if ( user?.uid && user?.displayName) {
          dispatch( login(user.uid, user.displayName ) )
        }
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
    dispatch( noteLogout() );
  };
};

export const logout = (): AuthAction => ({
  type: types.logout,
});
