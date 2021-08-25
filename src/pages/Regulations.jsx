import { useState, useEffect } from "react";

import { LegalLayout } from "../Layout/LegalLayout";
import RegulationCard from "../templates/RegulationCard";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Regulations = () => {
  const [loading, setLoading] = useState(false);
  const [regulations, setRegulations] = useState([]);

  const getAllRegulations = () => {
    setLoading(true);
    axiosInstance.get("/regulations").then((response) => {
      const results = response.data.data;
      console.log(results);
      setRegulations(results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllRegulations();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <LegalLayout text="New regulations on building a flat">
          {regulations.map((regulations) => {
            return <RegulationCard regulations={regulations} />;
          })}
        </LegalLayout>
      )}
    </div>
  );
};

export { Regulations };
