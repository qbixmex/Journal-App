import { AuthAction, types } from "../Types"
import { Dispatch } from "redux";

export const startLoginEmailPassword = (email: string, password: string): ( dispatch: Dispatch ) => void => {
  return ( dispatch: Dispatch ): void => {
    setTimeout(() => {
      dispatch( login(123, "JohnDoe") )
    }, 3000);
  };
};

export const login = (uid: string | number, displayName: string): AuthAction => ({
  type: types.login,
  payload: { uid, displayName }
});

export const logout = (): AuthAction => ({
  type: types.logout,
});
