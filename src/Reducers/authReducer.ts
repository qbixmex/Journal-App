import { types, AuthState, AuthAction } from "../Types";

const authReducer = ( state: AuthState = { logged: false }, action: AuthAction ): AuthState => {
  switch ( action.type ) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        logged: true
      };

    case types.logout:
      return {
        logged: false
      };
  
    default:
      return state;
  }
};

export default authReducer;
