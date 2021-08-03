import { PropertyRequestLayout } from "../Layout";
import bids from "../assets/userDashboard/bids.png";

const BidsPlaced = () => {
  return (
    <PropertyRequestLayout>
      <div className="mt-10">
        <img src={bids} alt="bids" />
        <img src={bids} alt="bids" className="mt-8" />
      </div>
    </PropertyRequestLayout>
  );
};

export { BidsPlaced };
