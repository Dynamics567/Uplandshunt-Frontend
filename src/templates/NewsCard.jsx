import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.png";

const NewsCard = ({ news }) => {
  return (
    <Link
      to={`/legal/newsview/${news.id}`}
      className="cursor-pointer"
      key={news.id}
    >
      <div
        className="grid grid-cols-3 bg-white rounded-sm shadow-md mb-10 p-6"
        style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
      >
        <div className="flex justify-center col-start-1 col-end-1">
          <img src={news.image} alt="prop1" />
        </div>
        <div className="col-start-2 col-end-4">
          <p className="font-semibold text-2xl text-center">{news.title}</p>
          <div className="font-normal text-base py-6">
            <p>{news.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
