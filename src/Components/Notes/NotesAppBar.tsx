import { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";

import { startSaveNote, startUploading } from '../../Actions/notes';
import { RootState } from '../../Types/index';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const note = useSelector(({ notes }: RootState) => notes.active )
  const noteDate = moment( note?.date );

  const handleSave = () => {
    dispatch( startSaveNote( note! ) );
  };

  const handlePictureUpload = () => {
    const input = document.querySelector("#fileSelector") as HTMLElement;
    input.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    dispatch( startUploading( file! ) );
  };

  return (
    <div className="notes__app-bar">
      <p className="notes__date">{ noteDate.format("MMMM D YYYY") }</p>

      <input
        id="fileSelector"
        name="file"
        type="file"
        style={{ display: "none" }}
        onChange={ handleFileChange }
      />

      <div>
        <button
          className="btn me-3"
          onClick={ handlePictureUpload }
        >
          picture
        </button>

        <button
          className="btn"
          onClick={ handleSave }
        >
          save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
