import { useState, useEffect } from "react";
import dot from "../assets/dot.svg";
import { axiosInstance } from "../Auth/Axios";

const SubCard = ({
  category,
  icon,
  amount,
  note,
  note1,
  note2,
  note3,
  bgImage,
  className,
}) => {
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState([]);

  const getSubscription = () => {
    axiosInstance.get("property/subscription/all").then((response) => {
      const results = response.data.data;
      console.log(results);
      setSubscription(results);
    });
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (
    <>
      {subscription.map((sub) => {
        return (
          <section
            key={sub.id}
            className={`flex flex-col mr-8 ${className}`}
            style={{ backgroundImage: `url(${bgImage})` }}
            // style={{ backgroundImage: `url(${sub.image})` }}
          >
            <div className={`font-roboto text-white p-6 `}>
              <div className="flex justify-between">
                <p className="text-xl font-bold">{sub.name}</p>
                <img src={icon} alt="icon" />
              </div>
              <p className="text-4xl my-4 text-center font-bold">
                {sub.amount_per_year}
              </p>
              <p className="font-normal text-sm leading-relaxed py-4 text-ashTwo">
                {sub.description}
              </p>
              <p className="font-semibold text-base pb-4 leading-relaxed text-ashTwo">
                Number of Properties: {sub.number_of_property}
              </p>
              <ul className="m-auto w-full">
                {sub.attributes.map((attr) => {
                  return (
                    <div className="flex items-center mb-4">
                      <img src={dot} alt="dot" className="mr-6" />
                      <li className="font-bold text-white text-base">{attr}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <p className="text-center py-4 bg-whiteAsh text-white font-bold text-base mt-auto w-full">
              Get Started Today
            </p>
          </section>
        );
      })}
    </>
  );
};

export default SubCard;
