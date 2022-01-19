import NotesAppBar from "./NotesAppBar";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Types/index';
import useForm from '../../Hooks/useForm';
import { Note } from "../../Types/notesTypes";
import { useEffect, useRef } from "react";
import { activeNote, startDeleting } from '../../Actions/notes';

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

  const handleDelete = (id: string) => {
    dispatch( startDeleting( id ) );
  };

  return (
    <div className="notes__main-content animate__animated animate__fadeIn animate__faster">
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

      <div className="mx-4 mb-4">
        <button
          className="btn btn-danger"
          style={{ width: "100%" }}
          onClick={ () => handleDelete( values.id! ) }
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default NoteScreen;
