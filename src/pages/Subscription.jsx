import { useState, useEffect } from "react";

import bronzeBg from "../assets/bronzeBg.svg";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import { plans } from "../data/subscription";
import { axiosWithAuth } from "../Auth/Axios";

const Subscription = ({ id }) => {
  const [active, setActive] = useState(1);
  const [getMonthId, setGetMonthId] = useState("");
  const [getPlanId, setGetPlanId] = useState("");

  const upgradeSub = () => {
    // console.log(getMonthId, getPlanId);
    const subObject = {
      plan_id: getPlanId,
      duration_in_month: getMonthId,
    };
    console.log(subObject);
    axiosWithAuth()
      .put("/account/subscription")
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    if (getMonthId && getPlanId) {
      upgradeSub();
    }
  }, [getMonthId, getPlanId, active]);
  return (
    <>
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
                style={
                  ({ backgroundColor: active ? "sub-active" : "" },
                  { color: active ? "sub-active" : "" })
                }
                key={monthId}
                onClick={() => {
                  setGetMonthId(() => duration);
                  setActive(() => monthId);
                  console.log(active);
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
            category="Bronze"
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
    </>
  );
};

export { Subscription };
