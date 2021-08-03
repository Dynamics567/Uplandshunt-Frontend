import bids from "../assets/userDashboard/bids.png";
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
