import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { axiosInstance } from "../Auth/Axios";
import { SingleLegalLayout } from "../Layout";
import DashboardLoader from "../templates/DashboardLoader";

const SingleRegulation = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [regulation, setregulation] = useState({});

  const getSingleregulation = () => {
    setLoading(true);
    axiosInstance.get(`/regulations/${id}`).then((response) => {
      const results = response.data.data;
      setregulation(results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSingleregulation();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <SingleLegalLayout text={regulation.title} author="By Chidi">
          <div>
            <img src={regulation.image} alt="property" className="my-4" />
            <p className="font-normal text-2xl mb-4 text-lightBlack">
              {regulation.content}
            </p>
          </div>
        </SingleLegalLayout>
      )}
    </div>
  );
};

export { SingleRegulation };
