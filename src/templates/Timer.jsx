import Countdown from "react-countdown";

const Timer = ({ startTime, endTime, boostProperty, show, setShow }) => {
  let date = new Date(endTime);
  let date2 = new Date(startTime);

  function diff_hours(date, date2) {
    var diff = (date2.getTime() - date.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }

  date = new Date(startTime);
  date2 = new Date(endTime);

  let countDownTime = diff_hours(date, date2);

  window.localStorage.setItem("countDownTime", countDownTime);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <button
          className="bg-metal p-4 font-semibold text-sm rounded-md text-white"
          onClick={boostProperty}
        >
          Boost Property
        </button>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <Countdown
        date={Date.now() + countDownTime * 3600000}
        renderer={renderer}
      />
    </div>
  );
};

export default Timer;
