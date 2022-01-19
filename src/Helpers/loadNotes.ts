import { db } from "../Firebase/firebase-config"
import { Note } from "../Types/notesTypes";

export const loadNotes = async ( uid: string ) => {
  const notesSnapshot = await db.collection(`${ uid }/journal/notes`).get();
  const notes: Note[] = [];

  notesSnapshot.forEach( note => {
    notes.push({
      id: note.id,
      title: note.data().title,
      body: note.data().body,
      imageUrl: note.data().imageUrl,
      date: note.data().date
    });
  });

  return notes;
}
