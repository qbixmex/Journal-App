import { types, UIState, UIAction } from "../Types";

const initialState: UIState = {
  loading: false,
  msgError: null
};

export const uiReducer = (state: UIState = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }

      case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }

    default:
      return state;
  }
};
