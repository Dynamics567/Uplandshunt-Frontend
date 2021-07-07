// import { DashboardSectionTitle } from "../atoms";
import { useState } from "react";

import smallTown from "../assets/userDashboard/smallTown.svg";
import { AllSavedProperties } from "../organisms";
import EmptyState from "../templates/EmptyState";

const SavedProperty = () => {
  const [editForm, setEditForm] = useState(false);
  return (
    <div className="">
      {editForm ? (
        <AllSavedProperties />
      ) : (
        <EmptyState
          image={smallTown}
          text="You have not added any properties yet!"
          buttonText="Add New Properties"
          setEditForm={setEditForm}
        />
      )}
    </div>
  );
};

export { SavedProperty };
