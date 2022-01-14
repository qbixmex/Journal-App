import { Dispatch } from 'redux';
export interface RootState {
  auth: AuthState,
  ui: UIState
}

export type AsyncAction = (dispatch: Dispatch) => void;
export interface Register {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface Login {
  email: string,
  password: string
}
export interface AuthState {
  uid?: string | number,
  name?: string;
};

export interface AuthPayload {
  uid: string | number;
  displayName: string;
}

export type AuthAction =
  | { type: types.login; payload: AuthPayload; }
  | { type: types.logout }
  | { type: null };

export type UIAction =
  | { type: types.uiSetError; payload: string; }
  | { type: types.uiRemoveError; }
  | { type: types.uiStartLoading; }
  | { type: types.uiFinishLoading; };

export interface UIState {
  loading: boolean;
  msgError: string | null;
}

export enum types {
  login           = "[Auth] Login",
  logout          = "[Auth] Logout",
  uiSetError      = "[UI] Set Error",
  uiRemoveError   = "[UI] Remove Error",
  uiStartLoading  = "[UI] Start loading",
  uiFinishLoading = "[UI] Finish loading",
}
