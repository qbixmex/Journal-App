export interface AuthState {
  uid?: string | number,
  name?: string;
};

export interface Payload {
  uid: string;
  displayName: string;
}

export type AuthAction =
  | { type: types.login; payload: Payload; }
  | { type: types.logout }
  | { type: null };

export enum types {
  login = "[Auth] Login",
  logout = "[Auth] Logout"
}
  