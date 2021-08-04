import BusinessProfile from "../templates/BusinessProfile";
import IndividualProfile from "../templates/IndividualProfile";

const Profile = () => {
  const getUserDetails = JSON.parse(localStorage.getItem("auth"));
  const getUserType = getUserDetails.user.business;

  return <>{getUserType ? <BusinessProfile /> : <IndividualProfile />}</>;
};

export { Profile };
