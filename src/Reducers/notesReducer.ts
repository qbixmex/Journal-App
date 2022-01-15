import { types } from "../Types";
import { NotesAction, NotesState } from "../Types/notesTypes";

const initialState: NotesState = {
  notes: [],
  active: null
};

export const notesReducer = ( state: NotesState = initialState, action: NotesAction ): NotesState => {
  switch ( action.type ) {
    case types.notesActive:
      return {
        ...state,
        active: { ...action.payload }
      };

    default:
      return state;
  }
};
