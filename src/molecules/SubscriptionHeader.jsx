import { useState } from "react";
import { plans } from "../data/subscription";

const SubscriptionHeader = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-3/4 flex items-center shadow-md rounded-md  border border-lightAsh">
      {plans.map(({ id, plan }) => {
        return (
          <div
            className="cursor-pointer"
            style={
              ({ backgroundColor: active ? "sub-active" : "" },
              { color: active ? "sub-active" : "" })
            }
            key={id}
            // className={
            //   active === id ? "tab-title tab-title--active" : "tab-title"
            // }
          >
            <p className="font-semibold text-base p-4 text-ash mr-8">{plan}</p>
          </div>
        );
      })}
    </div>
  );
};

export { SubscriptionHeader };
