import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-regular-svg-icons'

const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p className="mb-2">Select or create an entry</p>

      <FontAwesomeIcon icon={ faStar } color="white" size="4x" />
    </div>
  );
};

export default NothingSelected;
