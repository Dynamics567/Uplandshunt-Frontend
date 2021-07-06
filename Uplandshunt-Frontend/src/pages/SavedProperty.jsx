// import { DashboardSectionTitle } from "../atoms";
import smallTown from "../assets/userDashboard/smallTown.svg";
import EmptyState from "../templates/EmptyState";

const SavedProperty = () => {
  return (
    <EmptyState
      image={smallTown}
      text="You have not added any properties yet!"
      buttonText="Add New Properties"
    />
  );
};

export { SavedProperty };
