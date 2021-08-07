import { Link } from "react-router-dom";

const DashboardSectionTitle = ({
  text,
  buttonUrl,
  buttonText,
  showButton = true,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex justify-between items-center w-full m-4">
      <div className="w-full">
        <p className="text-2xl font-bold">{text}</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      {showButton && (
        <Link
          to={buttonUrl}
          className="w-full flex items-center justify-center"
        >
          <button
            className="rounded-md p-4 text-white bg-primary font-semibold "
            onClick={scrollToTop}
          >
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
};

export { DashboardSectionTitle };
