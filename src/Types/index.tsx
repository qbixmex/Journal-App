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

export interface Payload {
  uid: string | number;
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
  