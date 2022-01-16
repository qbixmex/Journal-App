import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../Actions/notes';
import { RootState } from '../../Types/index';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const note = useSelector(({ notes }: RootState) => notes.active )

  const handleSave = () => {
    dispatch( startSaveNote( note! ) );
  };

  return (
    <div className="notes__app-bar">
      <p className="notes__date">28 agosto 1986</p>
      <div>
        <button className="btn me-3">
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
