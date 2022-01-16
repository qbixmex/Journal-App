import { Note } from "../../Types/notesTypes";
import moment from "moment";

type Props = {
  entry: Note
}

const JournalEntry = ({ entry }: Props) => {
  const { title, body, imageUrl, date } = entry;
  const noteDate = moment( date );

  return (
    <div className="journal__entry">
      {
        imageUrl &&
        (
          <div
            className="journal__entry-picture"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${ imageUrl })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center"
            }}
          ></div>
        )
      }
      <div className="journal__entry-body">
        <h3 className="journal__entry-title">{ title }</h3>

        <div className="journal__entry-content">{ body }</div>

        <div className="journal__entry-date-box">
          <span>{ noteDate.format("dddd") }</span>
          <h4>{ noteDate.format("Do") }</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
