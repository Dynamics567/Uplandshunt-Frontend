import { ListingsLayout } from "../Layout";
// import prop1 from "../assets/userDashboard/smallProp.svg";
// import location from "../assets/location.svg";
// import amenities from "../assets/userDashboard/amenities.svg";
// import map from "../assets/userDashboard/map.svg";
// import searchBy from "../assets/userDashboard/searchBy.svg";
// import rentedBy from "../assets/userDashboard/rentedBy.svg";
// import saveButton from "../assets/userDashboard/saveButton.svg";
// import shareButton from "../assets/userDashboard/shareButton.svg";
// import details from "../assets/userDashboard/details.svg";
// import call from "../assets/userDashboard/call.svg";
import { PropertyDetails } from "./PropertyDetails";

const UserView = () => {
  return (
    <div className="my-10">
      <ListingsLayout>
        <PropertyDetails showFooter={false} showHeader={false} />
      </ListingsLayout>
    </div>
  );
};

export { UserView };
