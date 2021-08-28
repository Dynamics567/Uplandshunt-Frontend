import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import Timer from "../templates/Timer";
import { boostedProperties } from "../test";
import { Boost, Modal } from "../organisms";
import { listingHeader } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";

const ListingsHeader = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [toggleShowBoosted, setToggleShowBoosted] = useState(false);
  const [getPropertyId, setGetPropertyId] = useState({});

  let startTime;
  let endTime;

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

  useEffect(() => {
    getUserBoostedProperties();
  }, []);

  useEffect(() => {
    const isBoosted = boostedProperties.map((prop) => {
      return prop.property.id;
    });
    if (isBoosted.includes(+id)) {
      setToggleShowBoosted(true);
    } else {
      setToggleShowBoosted(false);
    }
  }, []);

  useEffect(() => {
    const data = boostedProperties.find((el) => el.property.id === +id);
    setGetPropertyId(data);
  }, [id]);

  // useEffect(() => {
  //   const data = boostedProperties.find((el) => {
  //     boostedProp.push(el.property.id);
  //     if (el.property.id === +id) {
  //       setToggleShowBoosted(true);
  //     } else {
  //       setToggleShowBoosted(false);
  //     }
  //   });
  //   setGetPropertyId(data);
  // }, [boostedProp]);

  if (getPropertyId) {
    startTime = getPropertyId.start_at;
    endTime = getPropertyId.end_at;
  }

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
        <Timer
          startTime={startTime}
          endTime={endTime}
          boostProperty={boostProperty}
          show={show}
          setShow={setShow}
        />
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
