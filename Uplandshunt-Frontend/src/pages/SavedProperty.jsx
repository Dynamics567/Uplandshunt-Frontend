// import { DashboardSectionTitle } from "../atoms";

import smallTown from "../assets/userDashboard/smallTown.svg";
import { AllSavedProperties } from "../pages";
import EmptyState from "../templates/EmptyState";

const SavedProperty = () => {
  return (
    <div className="">
      <EmptyState
        image={smallTown}
        text="You have not added any properties yet!"
        buttonText="Add New Properties"
        buttonUrl="/dashboard/savedProperty/allSavedProperties"
      />
    </div>
  );
};

export { SavedProperty };
