import { useEffect, useState } from "react";

import { axiosWithAuth } from "../Auth/Axios";
import thunder from "../assets/userDashboard/thunder.png";

const Boost = ({ id }) => {
  const [data, setData] = useState([]);
  console.log(id);
  const getBoostingPlans = () => {
    axiosWithAuth()
      .get("boost/plans")
      .then((response) => {
        const results = response.data.data;
        setData(results);
      });
  };

  useEffect(() => {
    getBoostingPlans();
  }, []);

  return (
    <div className="">
      <p className="font-normal text-base text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="text-base font-normal py-4">
        Select any plan from the list below:
      </p>
      <div className="cursor-pointer w-full flex rounded-md">
        {data.map(({ category, id, price, time }) => {
          return (
            <div
              className="shadow-lg rounded-lg bg-white px-8 py-4 mr-16 hover:border-blue-500"
              key={id}
            >
              <p className="text-center font-bold text-lg py-2">{category}</p>
              <div className="w-full flex justify-between items-center">
                <img src={thunder} alt="boost" className="w-4 mr-4" />
                <p className="font-normal text-base">Boost for {time} hrs</p>
              </div>
              <p className="text-center text-lg font-bold py-4">₦{price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Boost };
