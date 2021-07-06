import { useHistory } from "react-router-dom";

import leftArrow from "../assets/leftArrow.svg";

const EditNewListing = () => {
  const history = useHistory();
  return (
    <div>
      <div
        className="cursor-pointer flex items-center po"
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={leftArrow} alt="" />
        Back
      </div>
    </div>
  );
};

export { EditNewListing };
