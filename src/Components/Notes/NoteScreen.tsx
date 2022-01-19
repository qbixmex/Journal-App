import NotesAppBar from "./NotesAppBar";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Types/index';
import useForm from '../../Hooks/useForm';
import { Note } from "../../Types/notesTypes";
import { useEffect, useRef } from "react";
import { activeNote } from '../../Actions/notes';

const NoteScreen = () => {
  const dispatch = useDispatch();

  const note = useSelector(({ notes }: RootState) => notes.active);
  const { values, handleInputChange, reset, title, body, imageUrl } = useForm<Note>( note! );

  const activeId = useRef( note?.id );

  useEffect(() => {
    if( note?.id !== activeId.current) {
      reset( note! );
      activeId.current = note?.id
    }
  }, [ note, reset ]);

  useEffect(() => {
    dispatch( activeNote( values.id!, { ...values } ) );
  }, [ values, dispatch ]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          id="title"
          name="title"
          className="notes__content__title-input"
          type="text"
          placeholder="Subject Title"
          autoComplete="off"
          autoCorrect="off"
          value={ title }
          onChange={ handleInputChange }
        />

        <textarea
          id="body"
          name="body"
          className="notes__content__textarea"
          autoComplete="off"
          autoCorrect="off"
          placeholder="What happened today ?"
          value={ body }
          onChange={ handleInputChange }
        ></textarea>

        {
          imageUrl &&
          (
            <div className="notes__content__image-box">
              <img
                id="image"
                src={ imageUrl }
                alt={ title }
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default NoteScreen;
