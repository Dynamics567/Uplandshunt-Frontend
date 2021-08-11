import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import { Boost, Modal } from "../organisms";
import { listingHeader } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";

const ListingsHeader = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const boostProperty = () => {
    setShow(true);
    console.log("works");
  };

  const handleClose = () => {
    setShow(false);
  };

  const getBoostingPlans = () => {
    axiosWithAuth()
      .get("boost/plans")
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getBoostingPlans();
  }, []);
  return (
    <div className="flex items-center justify-between">
      <Modal showModal={show} handleClose={handleClose}>
        <Boost />
      </Modal>
      {listingHeader.map(({ item, url }) => {
        return (
          <NavLink
            className="cursor-pointer"
            activeClassName="dashboard-active"
            to={`${url}/${id}`}
            key={id}
          >
            <p className="font-bold text-lg text-ash mr-2">{item}</p>
          </NavLink>
        );
      })}
      <button
        className="bg-metal p-4 font-semibold text-sm rounded-md text-white"
        onClick={boostProperty}
      >
        Boost Property
      </button>
    </div>
  );
};

export { ListingsHeader };
