import { useState } from "react";

const SingleBidHistory = ({ bidType }) => {
  const [active, setActive] = useState(1);

  const changeActive = (id) => {
    setActive(id);
    console.log(active);
  };
  return (
    <div onClick={() => changeActive(bidType.id)}>
      <p
        className=""
        style={active ? { color: "yellow" } : { color: "yellow" }}
      >
        {bidType.item}
      </p>
    </div>
  );
};

export { SingleBidHistory };
