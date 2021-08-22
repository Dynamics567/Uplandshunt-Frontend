import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import { boostedProperties } from "../test";
import { Boost, Modal } from "../organisms";
import { listingHeader } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";

const ListingsHeader = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [toggleShowBoosted, setToggleShowBoosted] = useState(false);

  let getBoostedPropertyId = [];
  let getStartTime = [];
  let getEndTime = [];

  const boostProperty = () => {
    setShow(true);
    console.log("works");
  };

  const handleClose = () => {
    setShow(false);
  };

  const getUserBoostedProperties = () => {
    axiosWithAuth()
      .get("boost")
      .then((response) => {
        const results = response.data.data;
        // console.log(results);
      });
  };

  {
    boostedProperties.map((property) => {
      return getBoostedPropertyId.push(property.property.id);
    });
  }

  const propertyId = getBoostedPropertyId.includes(Number(id));

  console.log(getBoostedPropertyId);
  useEffect(() => {
    getUserBoostedProperties();
  }, []);

  useEffect(() => {
    if (propertyId) {
      return setToggleShowBoosted(true);
    }
  }, [propertyId]);

  // console.log(boostedProperties);
  return (
    <div className="flex items-center justify-between">
      <Modal
        showModal={show}
        handleClose={handleClose}
        modalTitle="Boost My Property"
        showButton={true}
      >
        <Boost id={id} />
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
      {toggleShowBoosted ? (
        <p>test</p>
      ) : (
        <button
          className="bg-metal p-4 font-semibold text-sm rounded-md text-white"
          onClick={boostProperty}
        >
          Boost Property
        </button>
      )}
    </div>
  );
};

export { ListingsHeader };
