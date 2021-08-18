import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ listings }) => {
  let listkeys = [];
  const listValues = [];
  for (const [key, value] of Object.entries(listings)) {
    listkeys.push(key);
    listValues.push(value.count);
  }

  delete listings.total_listed;

  const data = {
    labels: listkeys,
    datasets: [
      {
        label: "Listings details",
        data: listValues,
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
      // title: {
      //   display: true,
      //   text: "Listings details",
      //   align: "right",
      // },
      legend: {
        position: "right",
      },
      font: {
        size: 20,
      },
    },
  };

  return (
    <>
      <div style={styles.pieContainer}>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
