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
        active: {
          ...action.payload
        }
      };
    
    case types.notesAddNew:
      return {
        ...state,
        notes: [
          action.payload,
          ...state.notes
        ]
      }
    
    case types.notesLoad:
      return {
        ...state,
        notes: [ ...action.payload ]
      }

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map(
          note => note.id === action.payload.id
            ? action.payload.note
            : note
        )
      };
    
    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter( note => note.id !== action.payload.id )
      };

    case types.notesLogoutCleaning:
      return {
        notes: [],
        active: null
      };

    default:
      return state;
  }
};
