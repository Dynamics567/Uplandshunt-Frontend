// import { DashboardSectionTitle } from "../atoms";
import houseSearch from "../assets/userDashboard/houseSearch.svg";
import EmptyState from "../templates/EmptyState";

const MyPurchase = () => {
  return (
    <EmptyState
      image={houseSearch}
      text="You have not purchased any properties yet!"
      buttonText="Purchase New Properties"
      buttonUrl="/dashboard/purchase/propertyPurchased"
    />
  );
};

export { MyPurchase };
