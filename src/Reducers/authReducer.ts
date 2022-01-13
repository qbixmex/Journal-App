import { types, AuthState, AuthAction } from "../Types";

const authReducer = ( state: AuthState = {}, action: AuthAction ): AuthState => {
  switch ( action.type ) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      };

    case types.logout:
      return {};
  
    default:
      return state;
  }
};

export default authReducer;
