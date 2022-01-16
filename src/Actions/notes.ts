import { Dispatch } from "redux";
import { db } from "../Firebase/firebase-config"
import { GetState } from '../Store/store';
import { types } from "../Types";
import { Note } from "../Types/notesTypes";

export const startNewNote = () => {
  return async ( dispatch: Dispatch, getState: () => GetState ) => {
    const uid = getState().auth.uid;

    const newNote: Note = {
      title: "",
      body: "",
      date: new Date().getTime()
    }

    const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

    dispatch( activeNote( doc.id, newNote ) );
  };
};

export const activeNote = ( id: string, note: Note ) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const setNotes = ( notes: Note[] ) => ({
  type: types.notesLoad,
  payload: notes
});
