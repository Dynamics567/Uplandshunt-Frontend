import dot from "../assets/dot.svg";

const SubCard = ({
  category,
  icon,
  amount,
  note,
  note1,
  note2,
  note3,
  bgImage,
  className,
}) => {
  return (
    <section
      className={`flex flex-col mr-8 ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`font-roboto text-white p-6 `}>
        <div className="flex justify-between">
          <p className="text-xl font-bold">{category}</p>
          <img src={icon} alt="icon" />
        </div>
        <p className="text-4xl my-4 text-center font-bold">{amount}</p>
        <p className="font-normal text-sm leading-relaxed py-4 text-ashTwo">
          {note}
        </p>
        <ul className="m-auto w-10/12">
          <div className="flex items-center mb-4">
            <img src={dot} alt="dot" className="mr-6" />
            <li className="font-bold text-white text-base">{note1}</li>
          </div>
          <div className="flex items-center mb-4">
            <img src={dot} alt="dot" className="mr-6" />
            <li className="font-bold text-white text-base">{note2}</li>
          </div>
          <div className="flex items-center mb-4">
            <img src={dot} alt="dot" className="mr-6" />
            <li className="font-bold text-white text-base">{note3}</li>
          </div>
        </ul>
      </div>
      <p className="text-center py-4 bg-whiteAsh text-white font-bold text-base mt-auto w-full">
        Get Started Today
      </p>
    </section>
  );
};

export default SubCard;
