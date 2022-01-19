import { types } from ".";

export interface Note {
  id?: string;
  title: string;
  body: string;
  imageUrl?: string;
  date: number;
}

export interface NotesState {
  notes: Note[];
  active: Note | null;
};

export type NotesAction = 
  | { type: types.notesActive | types.notesAddNew, payload: Note }
  | { type: types.notesLoad, payload: Note[] }
  | { type: types.notesUpdated, payload: { id: string, note: Note } }
  | { type: types.notesDelete, payload: { id: string } };
