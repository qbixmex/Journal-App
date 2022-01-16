import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";
import { RootState } from '../../Types/index';

const JournalEntries = () => {

  const { notes } = useSelector(( { notes }: RootState ) => notes );

  return (
    <div className="journal__entries">
      {
        notes.map( note => (
          <JournalEntry key={ note.id } entry={ note } />
        ))
      }
    </div>
  );
};

export default JournalEntries;
