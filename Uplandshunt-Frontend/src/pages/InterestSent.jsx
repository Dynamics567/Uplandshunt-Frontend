import { PropertyRequestLayout } from "../Layout";
import bids from "../assets/userDashboard/bids.svg";

const InterestSent = () => {
  return (
    <PropertyRequestLayout>
      <div className="mt-10">
        <img src={bids} alt="bids" />
        <img src={bids} alt="bids" className="mt-8" />
      </div>
    </PropertyRequestLayout>
  );
};

export { InterestSent };
