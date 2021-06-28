import dot from "../assets/dot.svg";

const SubCard = ({ category, icon, amount, note, note1, note2, note3 }) => {
  return (
    <section className="background">
      <div className="layer font-roboto text-white ml-6 p-4">
        <div className="flex justify-between">
          <p className="text-xl">{category}</p>
          <img src={icon} alt="icon" />
        </div>
        <p className="text-3xl my-4 text-center font-bold">{amount}</p>
        <p className="font-normal text-base py-4 text-ashTwo">{note}</p>
        <ul className="m-auto w-10/12">
          <div className="flex items-center">
            <img src={dot} alt="dot" />
            <li>{note1}</li>
          </div>
          <div className="flex items-center">
            <img src={dot} alt="dot" />
            <li>{note2}</li>
          </div>
          <div className="flex items-center">
            <img src={dot} alt="dot" />
            <li>{note3}</li>
          </div>
        </ul>
        <p>Get Started Today</p>
      </div>
    </section>
  );
};

export default SubCard;
