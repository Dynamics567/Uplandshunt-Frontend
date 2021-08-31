import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { Button } from "../atoms";
import dot from "../assets/dot.svg";
import bronzeBg from "../assets/bronzeBg.svg";
import bronze from "../assets/bronze.svg";
import subscriber from "../assets/userDashboard/subscriber.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";

import { DashboardSectionTitle } from "../atoms";
import DashboardLoader from "../templates/DashboardLoader";
import { Link } from "react-router-dom";

const UserSubscription = () => {
  const [loading, setLoading] = useState(true);
  const [currentPlan, setCurrentPlan] = useState([]);
  const [error, setError] = useState("");

  const getUserSub = () => {
    setLoading(true);
    axiosWithAuth()
      .get("/subscription/active")
      .then((response) => {
        const results = response.data.data;
        setCurrentPlan(results);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false);
          const errorMessage = error.response.data.data;
          setError(errorMessage.data);
          toast.error(errorMessage);
        }
        // handle errors
        setError(error.status);
      });
  };

  useEffect(() => {
    getUserSub();
  }, []);

  if (loading && currentPlan) {
    return <DashboardLoader />;
  }

  //   if (currentPlan.length > 0) {
  //     const {
  //       plan: {
  //         id,
  //         name,
  //         attributes,
  //         number_of_property,
  //         amount_per_month,
  //         description,
  //       },
  //     } = currentPlan;
  //   }

  return (
    <>
      <DashboardSectionTitle
        text="My Subscription"
        buttonText="Upgrade Subcription"
        buttonUrl="/dashboard/subscription/upgradeSub"
      />
      {loading ? (
        <DashboardLoader />
      ) : currentPlan.length === 0 ? (
        <EmptyState
          image={subscriber}
          text="You have no active subscriptions yet!"
        />
      ) : (
        <div className="m-auto w-11/12">
          <p className="text-base font-normal my-4">{` Your current subscription plan is ${currentPlan.name}. This plan gives you access
            to Post ${currentPlan.number_of_property} properties. You can also upgrade to another in order to
            enjoy more offers.`}</p>
          <div className=" grid grid-cols-3 gap-6">
            <section
              id={currentPlan.id}
              className={`flex flex-col mr-8`}
              style={{ backgroundImage: `url(${bronzeBg})` }}
              // style={{ backgroundImage: `url(${sub.image})` }}
            >
              <div className={`font-roboto text-white p-6 `}>
                <div className="flex justify-between">
                  <p className="text-xl font-bold">
                    {(currentPlan, currentPlan.name)}
                  </p>
                  <img src={bronze} alt="icon" />
                </div>
                <p className="text-4xl my-4 text-center font-bold">
                  {currentPlan.amount_per_month}
                </p>
                <p className="font-normal text-sm leading-relaxed py-4 text-ashTwo">
                  {currentPlan.description}
                </p>
                <p className="font-semibold text-base pb-4 leading-relaxed text-ashTwo">
                  Number of Properties: {currentPlan.number_of_property}
                </p>
                <ul className="m-auto w-full">
                  {currentPlan.attributes.map((attr) => {
                    return (
                      <div className="flex items-center mb-4">
                        <img src={dot} alt="dot" className="mr-6" />
                        <li className="font-bold text-white text-base">
                          {attr}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <p className="text-center py-4 bg-whiteAsh text-white font-bold text-base mt-auto w-full">
                Get Started Today
              </p>

              <Link
                to="/dashboard/subscription/upgradeSub"
                className="bg-white"
              >
                <Button loading={loading} buttonText="Upgrade" />
              </Link>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export { UserSubscription };
