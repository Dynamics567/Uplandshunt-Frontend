import { useState, useEffect } from "react";

import bronzeBg from "../assets/bronzeBg.svg";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import { plans } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Subscription = ({ id }) => {
  const [active, setActive] = useState(plans[0].index);
  const [getMonthId, setGetMonthId] = useState("");
  const [getPlanId, setGetPlanId] = useState("");
  const [currentPlan, setCurrentPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState("");

  const callBack = window.location.origin;

  const upgradeSub = () => {
    // console.log(getMonthId, getPlanId);
    const subObject = {
      subscription_id: getPlanId,
      duration: getMonthId,
      call_back_url: `${callBack}/paymentSuccess`,
    };
    setLoading(true);
    axiosWithAuth()
      .post("/subscription/upgrade", subObject)
      .then((response) => {
        const successMessage = response.data.data;
        setAuthUrl(successMessage.authorization_url);
        setLoading(false);
        window.open(authUrl, "_blank");
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
        console.log(results);
      });
  };

  useEffect(() => {
    getUserSub();
    if (getMonthId && getPlanId) {
      upgradeSub();
    }
  }, [getMonthId, getPlanId, active]);

  if (loading) {
    return <DashboardLoader />;
  }

  // const planName = currentPlan.plan.name;
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
                  style={
                    ({ backgroundColor: active ? "sub-active" : "" },
                    { color: active ? "sub-active" : "" })
                  }
                  key={monthId}
                  onClick={() => {
                    setGetMonthId(() => duration);
                    setActive(() => monthId);
                    setGetPlanId("");
                  }}
                  // className={
                  //   active === id ? "tab-title tab-title--active" : "tab-title"
                  // }
                >
                  <p className="font-semibold text-base p-4 text-ash mr-8">
                    {plan}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className="w-full flex justify-between mb-10"
            // onClick={() => upgradeSub(id)}
          >
            <SubCard
              icon={bronze}
              amount="$10.00"
              bgImage={bronzeBg}
              buttonText="Upgrade"
              showButton={true}
              getPlanId={(getPlanId) => setGetPlanId(getPlanId)}
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
