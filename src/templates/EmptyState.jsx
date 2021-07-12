import { Link } from "react-router-dom";

const EmptyState = ({ image, text, buttonText, buttonUrl }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} alt={text} />
      <p className="font-bold text-xl py-4">{text}</p>
      <Link to={buttonUrl} className="w-full flex items-center justify-center">
        <button
          className="rounded-md p-4 text-white bg-primary font-semibold w-2/6"
          onClick={scrollToTop}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default EmptyState;
