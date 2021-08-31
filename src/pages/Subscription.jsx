import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import bronzeBg from "../assets/bronzeBg.svg";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import { plans } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { Button } from "../atoms";

const Subscription = ({ id }) => {
  const [active, setActive] = useState(1);
  const [getMonthId, setGetMonthId] = useState("");
  const [getPlanId, setGetPlanId] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState("");
  const [error, setError] = useState("");

  const callBack = window.location.origin;

  const upgradeSub = () => {
    const subObject = {
      subscription_id: getPlanId,
      duration: getMonthId,
      call_back_url: `${callBack}/paymentSuccess`,
    };
    setSpinnerLoading(true);
    axiosWithAuth()
      .put("/subscription/upgrade", subObject)
      .then((response) => {
        const successMessage = response.data;
        const authUrl = successMessage.data.authorization_url;
        setSpinnerLoading(false);
        window.open(authUrl, "_blank");
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          Object.values(errorMessage.errors)
            .flat()
            .map((err) => {
              toast.error(err);
            });
          setError(errorMessage);
        }
      });
  };

  useEffect(() => {
    if (getMonthId && getPlanId) {
      // upgradeSub();
    }
  }, [getMonthId, getPlanId]);

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="m-auto w-11/12">
          <div className="w-full my-4">
            <p className="text-2xl font-bold">Subscriptions</p>
            <div className="bg-primary w-16 h-2 ml-3"></div>
          </div>
          <div className="my-6 w-3/4 flex items-center shadow-md rounded-md  border border-lightAsh">
            {plans.map(({ monthId, plan, duration }) => {
              return (
                <div
                  className="cursor-pointer"
                  key={monthId}
                  onClick={(e) => {
                    setGetMonthId(() => duration);
                    setActive(() => monthId);
                    setGetPlanId("");
                  }}
                >
                  <p
                    className="font-semibold text-base p-4 text-ash mr-8"
                    style={
                      +active === +monthId
                        ? { backgroundColor: "#B3404A", color: "#ffffff" }
                        : { backgroundColor: "#ffffff", color: "#1c1c1c" }
                    }
                  >
                    {plan}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-between mb-10">
            <SubCard
              icon={bronze}
              amount="$10.00"
              bgImage={bronzeBg}
              buttonText="Select"
              showButton={true}
              getPlanId={(getPlanId) => setGetPlanId(getPlanId)}
              loading={loading}
              // id=
              // buttonUrl={window.location.replace("/payment")}
            />
          </div>
          <div
            className="flex w-full justify-center items-center text-center mb-10"
            onClick={upgradeSub}
          >
            <div className="w-2/6">
              <Button loading={spinnerLoading} buttonText="Upgrade" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Subscription };
