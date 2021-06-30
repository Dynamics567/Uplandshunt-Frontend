import { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { city } from "../data/Properties";
import rightArrow from "../assets/right.svg";
import leftArrow from "../assets/left.svg";
import { SectionTitle } from "../atoms";

const Explore = ({ title }) => {
  const sliderRef = useRef();

  const handlePrev = (ref) => {
    ref.current.slickPrev();
  };

  const handleNext = (ref) => {
    ref.current.slickNext();
  };
  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
    //       <p>{i + 1}</p>
    //     </a>
    //   );
    // },
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
    //   responsive:[
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //         },
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2,
    //           infinite: true,
    //         },
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           infinite: true,
    //         },
    //       },
    //   ]
  };
  return (
    <>
      <SectionTitle title={title} />
      <Slider ref={sliderRef} {...settings}>
        {city.map(({ name, photo, location, id }) => {
          return (
            <Link key={id}>
              <div className="mr-8 mb-8 border border-white shadow-xl rounded-md">
                <section className="relative w-full h-auto object-cover">
                  <img
                    src={photo}
                    alt="location"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute -top-2 bg-primary text-white right-1">
                    <p className="font-bold py-2 px-4 text-sm text-white my-1">
                      {location}
                    </p>
                  </div>
                </section>
              </div>
            </Link>
          );
        })}
      </Slider>
      <div className="mt-10 flex justify-center items-center ">
        <section>
          <img
            src={leftArrow}
            alt="left-arrow"
            onClick={() => handlePrev(sliderRef)}
            className="cursor-pointer w-4 slider-arrow mr-2"
          />
        </section>
        <p>
          Previous 1 2 3 <span className="text-primary">Next</span>
        </p>
        <section>
          <img
            src={rightArrow}
            alt="right-arrow"
            onClick={() => handleNext(sliderRef)}
            className="cursor-pointer w-4 slider-arrow"
          />
        </section>
      </div>
    </>
  );
};

export { Explore };
