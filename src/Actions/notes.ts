import { Dispatch } from "redux";
import Swal from 'sweetalert2';

import { db } from "../Firebase/firebase-config";
import { loadNotes } from "../Helpers/loadNotes";
import { GetState } from '../Store/store';
import { types } from "../Types";
import { Note } from "../Types/notesTypes";
import { fileUpload } from '../Helpers/export const fileUpload';

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
    dispatch( addNewNote( doc.id, newNote ) );
  };
};

export const activeNote = ( id: string, note: Note ) => ({
  type: types.notesActive,
  payload: { id, ...note }
});

export const addNewNote = ( id: string, note: Note ) => ({
  type: types.notesAddNew,
  payload: { id, ...note }
});

export const startLoadingNotes = ( uid: string ) => {
  return async ( dispatch: Dispatch ) => {
    const notes = await loadNotes( uid );
    dispatch( setNotes( notes ) )
  };
};

export const setNotes = ( notes: Note[] ) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = ( note: Note ) => {
  return async ( dispatch: Dispatch, getState: () => GetState ) => {
    const { uid } = getState().auth;

    if ( !note.imageUrl ) {
      delete note.imageUrl;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

    dispatch( refreshNote( note.id!, noteToFirestore ) );

    Swal.fire("Excellent", `<b><i>"${ note.title }"</i></b><br />saved successfully`, "success");
  };
}

export const refreshNote = ( id: string, note: Note ) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
});

export const startUploading = ( file: File ) => {
  return async ( dispatch: any, getState: () => GetState) => {
      const activeNote = getState().notes.active!;

      Swal.fire({
        title: "Uploading",
        text: "Please wait ...",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => Swal.showLoading()
      });

      const fileUrl = await fileUpload( file );

      activeNote.imageUrl = fileUrl;

      Swal.close();

      dispatch( startSaveNote( activeNote ) );
  }; 
};

export const startDeleting = ( id: string ) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    const uid: string = getState().auth.uid!;

    await db.doc(`${ uid }/journal/notes/${ id }`).delete();

    dispatch( deleteNote( id ) );

    Swal.fire("Excellent", "Deleted Successfully", "success");
  }
};

export const deleteNote = ( id: string ) => ({
  type: types.notesDelete,
  payload: { id }
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning
});
