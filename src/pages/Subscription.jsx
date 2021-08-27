import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import bronzeBg from "../assets/bronzeBg.svg";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import { plans } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Subscription = ({ id }) => {
  const [active, setActive] = useState(1);
  const [getMonthId, setGetMonthId] = useState("");
  const [getPlanId, setGetPlanId] = useState("");
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
    console.log(subObject);
    // setLoading(true);
    axiosWithAuth()
      .put("/subscription/upgrade", subObject)
      .then((response) => {
        const successMessage = response.data.data;
        setAuthUrl(successMessage.authorization_url);
        console.log(successMessage);
        // setLoading(false);
        // window.open(authUrl, "_blank");
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false);
          const errorMessage =
            error.response.data.data.errors.duration[0] ||
            error.response.data.data.errors.duration[1];
          console.log(errorMessage);
          setError(errorMessage);
          toast.error(errorMessage);
        }
      });
  };

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
          setError(errorMessage);
          toast.error(errorMessage);
        }
        // handle error
        setError(error.status);
      });
  };

  useEffect(() => {
    if (getMonthId && getPlanId) {
      upgradeSub();
    }
  }, [getMonthId, getPlanId, active]);

  useEffect(() => {
    getUserSub();
  }, []);

  if (loading) {
    return <DashboardLoader />;
  }

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="m-auto w-11/12">
          <div className="w-full my-4">
            <p className="text-2xl font-bold">Subscriptions</p>
            <div className="bg-primary w-16 h-2 ml-3"></div>
            <p className="text-lg my-4 font-bold">Current Subscription Plan:</p>
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
          <div
            className="w-full flex justify-between mb-10"
            onClick={() => upgradeSub(id)}
          >
            <SubCard
              icon={bronze}
              amount="$10.00"
              bgImage={bronzeBg}
              buttonText="Upgrade"
              showButton={true}
              getPlanId={(getPlanId) => setGetPlanId(getPlanId)}
              loading={loading}
              // id=
              // buttonUrl={window.location.replace("/payment")}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Subscription };
