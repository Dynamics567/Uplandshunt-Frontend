// import { DashboardSectionTitle } from "../atoms";
import { useState } from "react";
import building from "../assets/userDashboard/building.svg";
import { EditNewListing } from "../organisms";
import EmptyState from "../templates/EmptyState";

const Listings = () => {
  const [editForm, setEditForm] = useState(false);
  return (
    <div className="">
      {editForm ? (
        <EditNewListing />
      ) : (
        <EmptyState
          image={building}
          text="You have not added any listings yet!"
          buttonText="Add New Listings"
          setEditForm={setEditForm}
        />
      )}
    </div>
  );
};

export { Listings };
