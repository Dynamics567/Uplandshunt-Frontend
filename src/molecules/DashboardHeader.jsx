import search from "../assets/search.svg";
import active from "../assets/userDashboard/active.svg";
import avatar from "../assets/userDashboard/avatar.svg";

const DashboardHeader = () => {
  return (
    <div
      className="flex justify-between p-4"
      style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
    >
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Lagos"
          className="rounded-3xl rounded-r-none p-4 text-sm font-normal border border-lightAsh"
          style={{ width: "50%" }}
        />
        <img src={search} alt="search" />
      </div>
      <div className="flex items-center">
        <img src={active} alt="active" className="mr-4" />
        <p className="font-bold text-base mr-4">Chidi</p>
        <img src={avatar} alt="avatar" className="mr-10" />
      </div>
    </div>
  );
};

export { DashboardHeader };
