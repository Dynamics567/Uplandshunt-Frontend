import LoadSpinner from "../templates/LoadSpinner";

const Button = ({ buttonText, loading }) => {
  return (
    <div className="bg-primary rounded-md p-4 my-8 flex w-full justify-between items-center text-center">
      <button className="text-white flex justify-center items-center bg-primary font-semibold w-full focus:outline-none">
        {loading ? <LoadSpinner /> : buttonText}
      </button>
    </div>
  );
};

export { Button };
