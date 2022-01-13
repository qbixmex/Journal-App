import NotesAppBar from "./NotesAppBar";
import bokuNoHeroimage from "../../Assets/Images/boku-no-hero.jpg"

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          className="notes__content__title-input"
          type="text"
          placeholder="Subject Title"
          autoComplete="off"
          autoCorrect="off"
        />

        <textarea
          id=""
          name=""
          className="notes__content__textarea"
          autoComplete="off"
          autoCorrect="off"
          placeholder="What happened today ?"
        ></textarea>

        <div className="notes__content__image-box">
          <img
            src={ bokuNoHeroimage }
            alt="Boku no hero"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
