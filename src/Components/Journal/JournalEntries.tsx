import JournalEntry from "./JournalEntry";

const entries: number[] = [1, 2, 3, 4, 5];

const JournalEntries = () => {
  return (
    <div className="journal__entries">
      {
        entries.map( value => (
          <JournalEntry key={ value } />
        ))
      }
    </div>
  );
};

export default JournalEntries;
