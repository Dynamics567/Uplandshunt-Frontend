import { PropertyRequestLayout } from "../Layout";
import documentRequest from "../assets/userDashboard/documentRequest.svg";
import pay from "../assets/userDashboard/pay.svg";

const PropertyRequestDocument = () => {
  return (
    <PropertyRequestLayout>
      <div className="mt-10">
        <img src={documentRequest} alt="documentRequest" />
        <img src={pay} alt="pay" className="mt-4" />
      </div>
    </PropertyRequestLayout>
  );
};

export { PropertyRequestDocument };
