import bgImage from "../assets/bgImg.svg";
import support from "../assets/support.svg";
import search from "../assets/search.svg";

const Hero = () => {
  return (
    <div
      className="bg-lightBlack flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        minHeight: "75vh",
        // backgroundRepeat: "no-repeat",
        // width: "100%",
      }}
    >
      <p
        className="text-center capitalize text-white text-5xl leading-14 font-bold"
        style={{ lineHeight: "4rem" }}
      >
        Real estate re-imagined for fast growing <br /> and dynamic population
      </p>
      <div className="flex justify-center items-center w-full my-12">
        <input
          type="text"
          placeholder="Search property by City Name or Pin Code"
          className="rounded-3xl rounded-r-none w-2/6 p-4 text-sm font-normal"
        />
        <img src={search} alt="search" />
      </div>
      <div className="mt-16 hero-support">
        <img src={support} alt="support" className="w-20 hero-support" />
      </div>
    </div>
  );
};

export { Hero };
