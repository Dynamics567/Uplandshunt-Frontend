import { useEffect } from "react";
import { axiosWithAuth } from "../Auth/Axios";

const Transactions = () => {
  const getAllTransactions = () => {
    axiosWithAuth()
      .get("/transaction")
      .then((response) => {
        console.log(response.data.data);
      });
  };

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <div className="m-auto w-11/12 mt-10">
      <p>test</p>
    </div>
  );
};

export { Transactions };
