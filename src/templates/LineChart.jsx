import { Line } from "react-chartjs-2";
import { save } from "../test";

const savedPropertyKeys = [];
const savedPropertyValues = [];
for (const [key, value] of Object.entries(save[0])) {
  savedPropertyKeys.push(key);
  savedPropertyValues.push(
    value.map((value) => {
      return value;
    })
  );
}

console.log(savedPropertyValues, savedPropertyKeys);

const data = {
  labels: savedPropertyKeys,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const styles = {
  lineContainer: {
    width: "100%",
    height: "100%",
  },
};

const LineChart = () => (
  <div style={styles.lineContainer}>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
