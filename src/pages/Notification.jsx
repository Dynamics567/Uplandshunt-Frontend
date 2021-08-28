import { useEffect, useState } from "react";

import DashboardLoader from "../templates/DashboardLoader";
import { useAuthState } from "../Context";
import { axiosWithAuth } from "../Auth/Axios";
import PieChart from "../templates/PieChart";
import DoughnutChart from "../templates/DoughnutChart";
// import LineChart from "../templates/LineChart";

const Notification = (props) => {
  const userDetails = useAuthState();
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGraphDetails = () => {
    setLoading(true);
    axiosWithAuth()
      .get("graph")
      .then((response) => {
        const results = response.data.data;
        setGraphData(results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getGraphDetails();
  }, []);

  if (loading) {
    return <DashboardLoader />;
  }

  const listings = graphData.listing_details;
  const transactions = graphData.transaction_history;
  // const savedProperty = graphData.saved_properties;
  {
    console.log(listings);
  }
  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="m-auto w-11/12">
          <p className="font-bold text-base my-4 ">
            Welcome {userDetails.user?.first_name}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <PieChart listings={listings} />
            <DoughnutChart transactions={transactions} />
            {/* <LineChart savedProperty={savedProperty} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export { Notification };
