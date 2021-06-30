import bgImage from "../assets/bgImg.png";

const Background = () => {
  return (
    <div className="w-full h-full relative text-center overflow-auto">
      <div className="h-full object-cover">
        <img
          src={bgImage}
          alt="bgImage"
          className="bg-lightBlack h-screen w-full object-cover"
        />
      </div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-5xl leading-14 font-bold capitalize">
        Real estate re-imagined for fast growing and dynamic population
      </p>
    </div>
  );
};

export default Background;
