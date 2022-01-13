import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">

        <p className="mt-3 mb-3">
          <FontAwesomeIcon icon={ faUser } className="me-2" />
          <span>John Doe</span>
        </p>

        <button className="btn">
          logout
        </button>
      </div>

      <div className="journal__new-entry">
        <FontAwesomeIcon icon={ faCalendarPlus } size="5x" className="mb-4" />
        <p>New Entry</p>
      </div>

      <JournalEntries />

    </aside>
  );
};

export default Sidebar;
