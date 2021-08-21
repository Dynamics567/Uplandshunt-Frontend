import { Doughnut } from "react-chartjs-2";

import transact from "../assets/userDashboard/transact.png";

const DoughnutChart = ({ transactions }) => {
  // transactions.shift();
  // console.log(transactions.remove[0]);
  const transactionkeys = [];
  const transactionValues = [];
  for (const [key, value] of Object.entries(transactions)) {
    transactionkeys.push(key);
    transactionValues.push(value.total_amount);
  }

  delete transactions.total;

  const data = {
    labels: transactionkeys,
    datasets: [
      {
        label: "# of Votes",
        data: transactionValues,
        backgroundColor: [
          "#B3404A",
          "#CE787F",
          "#96363E",
          "#E4B4B8",
          "#a53b44",
          "#b63a44",
        ],
        //   borderColor: [
        //     "rgba(255, 99, 132, 1)",
        //     "rgba(54, 162, 235, 1)",
        //     "rgba(255, 206, 86, 1)",
        //     "rgba(75, 192, 192, 1)",
        //     "rgba(153, 102, 255, 1)",
        //     "rgba(255, 159, 64, 1)",
        //   ],
        borderWidth: 1,
      },
    ],
  };

  const styles = {
    doughnutContainer: {
      width: "80%",
      height: "80%",
    },
  };

  const options = {
    plugins: {
      // title: {
      //   display: true,
      //   text: "Transaction history",
      // },
      legend: {
        // display: false,
        position: "right",
      },
    },
  };

  return (
    <>
      <div style={styles.doughnutContainer}>
        <div className="flex">
          <img src={transact} alt="transact" className="w-6" />
          <p className="font-bold text-lg">Transaction history</p>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default DoughnutChart;
