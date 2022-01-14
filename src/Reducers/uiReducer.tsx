import { types, UI, UIAction } from "../Types";

const initialState: UI = {
  loading: false,
  msgError: null
}

export const uiReducer = (state: UI = initialState, action: UIAction): UI => {
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
