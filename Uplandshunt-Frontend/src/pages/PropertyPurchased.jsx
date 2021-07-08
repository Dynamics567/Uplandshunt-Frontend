import bids from "../assets/userDashboard/bids.svg";
import { PurchaseLayout } from "../Layout";

const PropertyPurchased = () => {
  return (
    <PurchaseLayout>
      <div className="mt-10">
        <img src={bids} alt="bids" />
        <img src={bids} alt="bids" className="mt-8" />
      </div>
    </PurchaseLayout>
  );
};

export { PropertyPurchased };
