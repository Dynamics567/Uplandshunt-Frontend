import { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { property } from "../data/Properties";
import rightArrow from "../assets/right.svg";
import leftArrow from "../assets/left.svg";
import locationIcon from "../assets/location.svg";
import { SectionTitle } from "../atoms";

const PropertySlider = ({ title }) => {
  const sliderRef = useRef();

  const handlePrev = (ref) => {
    ref.current.slickPrev();
  };

  const handleNext = (ref) => {
    ref.current.slickNext();
  };
  const settings = {
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
        {property.map(({ name, photo, location, id, price }) => {
          return (
            <Link key={id}>
              <div className="mr-8 mb-8 border border-white shadow-xl rounded-md">
                <section className="w-full h-auto object-cover">
                  <img
                    src={photo}
                    alt="location"
                    className="object-cover w-full h-full"
                  />
                </section>
                <section className="mt-4 p-2">
                  <p className="font-bold text-sm">{name}</p>
                  <div className="flex">
                    <img src={locationIcon} alt="location" className="mr-2" />
                    <p className="font-bold text-sm text-ash my-1">
                      {location}
                    </p>
                  </div>
                  <p className="font-bold text-base">{price}</p>
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

export { PropertySlider };
