import NoteScreen from "../Notes/NoteScreen";
import Sidebar from "./Sidebar";
// import NothingSelected from "./NothingSelected";

const RegisterScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      {/* <NothingSelected /> */}
      <NoteScreen />
    </div>
  );
};

export default RegisterScreen;
