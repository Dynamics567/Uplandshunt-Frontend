import checkbox from "../assets/userDashboard/checkbox.svg";
import { plans } from "../data/subscription";

const Subscription = () => {
  return (
    <>
      <div className="border border-lightAsh rounded-md mt-6 ml-10 w-3/4">
        <p className="font-bold text-xl p-6">Current Subscription : Free</p>
        {plans.map(({ id, plan, access }) => {
          return (
            <div
              className="flex items-center p-6"
              key={id}
              style={{ border: "0.7px solid #c4c4c4" }}
            >
              <p className="font-semibold text-xl mr-4">{plan}</p>
              <p className="font-normal text-lg mr-4">{access}</p>
              <img src={checkbox} alt="checkbox" />
            </div>
          );
        })}
      </div>
      <div className="m-auto w-1/2 mt-6">
        <button className="rounded-md p-4 text-white bg-primary font-semibold w-2/6">
          Upgrade
        </button>
      </div>
    </>
  );
};

export { Subscription };
