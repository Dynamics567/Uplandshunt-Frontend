import { Pie } from "react-chartjs-2";

import smallBuild from "../assets/userDashboard/smallBuild.png";

const PieChart = ({ listings }) => {
  let listkeys = [];
  const listValues = [];

  for (const [key, value] of Object.entries(listings)) {
    listkeys.push(key);
    listValues.push(value.count);
  }
  console.log(listings);
  const removeUndeScoreFromKeys = listkeys.map((key) => {
    return key.replace(/[_]/g, " ");
  });

  delete listings.total_listed;

  const isEmpty = Object.entries(listings).length === 0;

  const dataToDisplay = isEmpty ? [0, 0, 0, 0, 0, 0, 0] : listValues;

  const data = {
    labels: removeUndeScoreFromKeys,
    datasets: [
      {
        label: "Listings details",
        data: [0, 0, 0, 0, 0, 0, 0],
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
    animation: {
      duration: 2000,
    },
  };

  const styles = {
    pieContainer: {
      width: "80%",
      height: "80%",
    },
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      font: {
        size: 20,
      },
    },
  };

  return (
    <div className="">
      <div style={styles.pieContainer}>
        <div className="flex">
          <img src={smallBuild} alt="smallBuild" className="w-6" />
          <p className="font-bold text-lg">Listings details</p>
        </div>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;

// let ctx = document.getElementById("chartContainer").getContext("2d");

// let data = [
//   [0, 0, 0],
//   [1, 2, 3],
// ];
// let labels = ["A", "B", "C"];
// let bgColors = ["yellow", "orange", "aquamarine"];

// let options = {
//   borderWidth: 1,
//   borderColor: "black",
//   legend: {
//     labels: {
//       // Prevent items with undefined labels from appearing in the legend
//       filter: (item) => item.text !== undefined,
//     },
//   },
//   tooltips: {
//     // Prevent items with undefined labels from showing tooltips
//     filter: (item, chart) => chart.labels[item.index] !== undefined,
//   },
// };

// let chartConfig = {
//   type: "pie",
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         data: data[0],
//         backgroundColor: bgColors,
//         label: "data",
//         borderColor: "black",
//         borderWidth: 2,
//       },
//       {
//         data: data[1],
//         backgroundColor: bgColors,
//         label: "data",
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   },
//   options: options,
// };

// // Check if data is all 0s; if it is, add dummy data to end with empty label
// chartConfig.data.datasets.forEach((dataset) => {
//   if (dataset.data.every((el) => el === 0)) {
//     dataset.backgroundColor.push("rgba(255,255,255,0)");
//     dataset.data.push(1);
//   }
// });

// let pieChart = new Chart(ctx, chartConfig);
