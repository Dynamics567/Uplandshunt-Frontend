import support from "../assets/support.svg";
import search from "../assets/search.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center capitalize text-white text-5xl leading-14 font-bold">
          <p>
            Real estate re-imagined for fast growing <br /> and dynamic
            population
          </p>
          <div className="inline-flex w-full">
            <div className="flex w-full justify-center mt-16">
              <input
                type="text"
                placeholder="Search property by City Name or Pin Code"
                className="rounded-3xl rounded-r-none w-2/6 p-4 text-sm font-normal"
              />
              <img src={search} alt="search" />
            </div>
          </div>
          <div className="hero-support fixed top-0 inset-x-0 z-50 h-16">
            <img src={support} alt="support" className="w-36 hero-support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
