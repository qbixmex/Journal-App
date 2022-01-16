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
  | { type: types.notesActive, payload: Note }
  | { type: types.notesLoad, payload: Note[] };