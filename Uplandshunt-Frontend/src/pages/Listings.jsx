// import { DashboardSectionTitle } from "../atoms";
import building from "../assets/userDashboard/building.svg";
import EmptyState from "../templates/EmptyState";

const Listings = () => {
  return (
    <div className="">
      <EmptyState
        image={building}
        text="You have not added any listings yet!"
        buttonText="Add New Listings"
        buttonUrl="/dashboard/listings/edit"
      />
    </div>
  );
};

export { Listings };
