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
  {
    console.log(transactions.length);
  }
  delete transactions.total;

  const data = {
    labels: transactionkeys,
    datasets: [
      {
        label: "",
        fillColor: "rgba(220,220,220,0.0)",
        strokeColor: "rgba(220,220,220,0)",
        pointColor: "rgba(220,220,220,0)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        // change this data values according to the vertical scale
        // you are looking for
        data: [65, 59, 80, 81, 56, 55, 40],
      },
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
