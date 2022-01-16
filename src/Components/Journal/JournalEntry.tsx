import { Note } from "../../Types/notesTypes";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeNote } from '../../Actions/notes';

type Props = {
  entry: Note
}

const JournalEntry = ({ entry }: Props) => {
  const noteDate = moment( entry.date );
  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch( activeNote( entry.id, entry ) );
  };

  return (
    <div
      className="journal__entry"
      onClick={ () => handleActiveNote() }
    >
      {
        entry.imageUrl &&
        (
          <div
            className="journal__entry-picture"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${ entry.imageUrl })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center"
            }}
          ></div>
        )
      }
      <div className="journal__entry-body">
        <h3 className="journal__entry-title">{ entry.title }</h3>

        <div className="journal__entry-content">{ entry.body }</div>

        <div className="journal__entry-date-box">
          <span>{ noteDate.format("dddd") }</span>
          <h4>{ noteDate.format("Do") }</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
