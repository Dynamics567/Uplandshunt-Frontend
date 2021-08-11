import eye from "../assets/userDashboard/eye.png";
import file from "../assets/userDashboard/file.png";

const Document = ({ document }) => {
  return (
    <div
      key={document.id}
      className="p-4 grid grid-cols-3 gap-28 mb-4 font-normal text-base border-b border-ashThree"
    >
      <div className="flex">
        <img src={file} alt="file" className="w-4 mr-2" />
        <p>{document.name}</p>
      </div>
      <div className="cursor-pointer flex items-center justify-center">
        <a href={document.image_url} target="_blank" className="">
          <img src={eye} alt="" className="w-4" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="w-1/2 uppercase text-white rounded-3xl px-2 py-1 text-xs"
          style={{
            backgroundColor:
              document.status === "approved"
                ? "#29CC97"
                : document.status === "pending"
                ? "black"
                : "#B3404A",
          }}
        >
          {document.status}
        </button>
      </div>
    </div>
  );
};

export { Document };
