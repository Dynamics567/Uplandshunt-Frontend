// import { DashboardSectionTitle } from "../atoms";
import propertyQuestion from "../assets/userDashboard/propertyQuestion.svg";
import EmptyState from "../templates/EmptyState";

const PropertyRequest = () => {
  return (
    <EmptyState
      image={propertyQuestion}
      text="You have not requested any properties yet!"
      buttonText="Request New Properties"
      buttonUrl="/dashboard/request/bidsPlaced"
    />
  );
};

export { PropertyRequest };
