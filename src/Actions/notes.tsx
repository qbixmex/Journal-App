import { Dispatch } from "redux";
import { db } from "../Firebase/firebase-config"
import { GetState } from '../Store/store';
import { Note } from '../Reducers/notesReducer';

export const startNewNote = () => {
  return async ( dispatch: Dispatch, getState: () => GetState ) => {
    const uid = getState().auth.uid;

    console.log( uid );

    const newNote: Note = {
      title: "",
      body: "",
      date: new Date().getTime()
    }

    const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

    console.log( doc );

    // dispatch(  )
  };
};
