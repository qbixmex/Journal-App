import bokuNoHeroImg from "../../Assets/Images/boku-no-hero.jpg";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${ bokuNoHeroImg })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        }}
      ></div>
      <div className="journal__entry-body">
        <h3 className="journal__entry-title">
          Lorem Ipsum dolor dolem
        </h3>

        <div className="journal__entry-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit deleniti velit atque.
        </div>

        <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
