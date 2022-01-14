import { useSelector } from "react-redux";

import { RootState } from '../../Types/index';
import Sidebar from "./Sidebar";
import NoteScreen from "../Notes/NoteScreen";
import NothingSelected from "./NothingSelected";

const RegisterScreen = () => {
  const active = useSelector( ({ notes }: RootState) => notes.active );

  return (
    <div className="journal__main-content">
      <Sidebar />
      { active ? <NoteScreen /> : <NothingSelected /> }
    </div>
  );
};

export default RegisterScreen;
