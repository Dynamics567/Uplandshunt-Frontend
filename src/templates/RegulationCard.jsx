import { Link } from "react-router-dom";

const RegulationCard = ({ regulations }) => {
  return (
    <Link
      to={`/legal/blogview/${regulations.id}`}
      className="cursor-pointer"
      key={regulations.id}
    >
      <div
        className=" bg-white rounded-sm shadow-md mb-10 p-6"
        style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
      >
        <div className="">
          <p className="font-semibold text-2xl text-center">
            {regulations.title}
          </p>
          <div className="font-normal text-base py-6">
            <p>{regulations.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegulationCard;
