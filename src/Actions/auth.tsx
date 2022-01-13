import { AuthAction, types } from "../Types"

export const login = (uid: string | number, displayName: string): AuthAction => ({
  type: types.login,
  payload: { uid, displayName }
});

export const logout = (): AuthAction => ({
  type: types.logout,
});
