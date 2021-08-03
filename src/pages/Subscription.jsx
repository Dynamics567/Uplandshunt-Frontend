import bronzeBg from "../assets/bronzeBg.svg";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import chip from "../assets/userDashboard/chip.png";

const Subscription = () => {
  return (
    <>
      <div className="m-auto w-11/12">
        <div className="w-full my-4">
          <p className="text-2xl font-bold">Subscriptions</p>
          <div className="bg-primary w-16 h-2 ml-3"></div>
        </div>
        <img src={chip} alt="chip" className="w-1/2 mb-4" />
        <div className="w-full flex justify-between mb-10">
          <SubCard
            category="Bronze"
            icon={bronze}
            amount="$10.00"
            bgImage={bronzeBg}
            buttonText="Upgrade"
          />
        </div>
      </div>
    </>
  );
};

export { Subscription };
