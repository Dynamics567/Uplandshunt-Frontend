import React from "react";
import { PropertyDetails } from "./PropertyDetails";

const ViewBidsPropertyRequest = () => {
  return (
    <div>
      <PropertyDetails
        showHeader={false}
        showFooter={false}
        showBids={false}
        showDocuments={true}
      />
    </div>
  );
};

export { ViewBidsPropertyRequest };
