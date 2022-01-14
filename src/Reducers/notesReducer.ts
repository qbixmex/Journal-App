export interface Note {
  id: string;
  title: string;
  body: string;
  imageUrl: null | string;
  date: number;
}

export interface NotesState {
  notes: Note[];
  active: null | Note;
};

export type NotesAction = 
  | { type: "[Note] index" };

const initialState: NotesState = {
  notes: [],
  active: null
};

export const notesReducer = ( state: NotesState = initialState, action: NotesAction ): NotesState => {
  switch ( action.type ) {
    case "[Note] index":
      return state;
  
    default:
      return state;
  }
};
