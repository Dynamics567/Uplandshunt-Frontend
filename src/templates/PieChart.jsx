import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ listings }) => {
  let listkeys = [];
  const listValues = [];
  for (const [key, value] of Object.entries(listings)) {
    listkeys.push(key);
    listValues.push(value.count);
  }

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

  // const options = {
  //   cutoutPercentage: 55,
  //   elements: {
  //     center: {
  //       // text: `${numeral(total).format(
  //       //   "0,0"
  //       // )} ${innerTopText} ${innerMiddleText} ${innerBottomText}`,
  //       fontColor: "#666666",
  //       fontFamily: "Allianz-Neo",
  //       fontStyle: "bold",
  //       minFontSize: 15,
  //       maxFontSize: 20,
  //     },
  //   },
  //   plugins: {
  //     outlabels: {
  //       backgroundColor: "white", // Background color of Label
  //       borderColor: "none", // Border color of Label
  //       borderRadius: 0, // Border radius of Label
  //       borderWidth: 0, // Thickness of border
  //       color: "black", // Font color
  //       display: false,
  //       lineWidth: 1, // Thickness of line between chart arc and Label
  //       padding: 0,
  //       lineColor: "black",
  //       textAlign: "center",
  //       stretch: 45,
  //     },
  //     labels: false,
  //   },
  //   legend: {
  //     display: true,
  //     position: "right",
  //     align: "center",
  //     fontFamily: "Allianz-Neo",
  //     textDirection: "ltr",
  //     labels: {
  //       usePointStyle: true,
  //       fontColor: "#006192",
  //     },
  //   },
  // };

  return (
    <>
      {/* <div className="header">
        <h1 className="title">Doughnut Chart</h1>
        <div className="links"></div>
      </div> */}
      <div style={styles.pieContainer}>
        <Pie data={data} />
      </div>
    </>
  );
};

export default PieChart;
