import { DashboardSectionTitle } from "../atoms";
import building from "../assets/userDashboard/building.svg";

const Listings = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={building} alt="building" />
      <p className="font-bold text-xl py-4">
        You have not added any listings yet!
      </p>
      <button className="rounded-md p-4 text-white bg-primary font-semibold w-2/6">
        Add New Listings
      </button>
    </div>
  );
};

export { Listings };
