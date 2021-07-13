import React from "react";
import { getInTouch, company } from "../data/FooterItems";
import { SectionWrapper } from "../Layout";
import whatsappFooter from "../assets/whatsappFooter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 bg-purple text-white pt-4">
      <SectionWrapper>
        <p className="mb-10 font-normal text-lg m-auto w-11/12">Sample logo</p>
        <div className="flex justify-between m-auto w-11/12">
          <section>
            <p className="font-bold text-lg pb-6 uppercase">Get in Touch</p>
            <p className="font-normal text-lg mb-3">Contact Us</p>
            {getInTouch.map(({ item, id, image }) => {
              return (
                <div className="" key={id}>
                  <div className="flex items-center mb-3">
                    <img src={image} alt={item} className="mr-2" />
                    <p className="font-normal text-lg">{item}</p>
                  </div>
                </div>
              );
            })}
          </section>
          <div className="">
            <p className="font-bold text-lg pb-6 uppercase">Company</p>
            {company.map(({ item, id, path }) => {
              return (
                <Link to={path} className="mb-3" key={id}>
                  <p className="font-normal text-lg">{item}</p>
                </Link>
              );
            })}
          </div>
          <div className="">
            <p className="font-bold text-lg pb-6 uppercase">
              subscribe to our newsletter
            </p>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Email Address"
                className="p-2 font-semibold text-lg rounded-r-none rounded-md"
              />
              <button className="bg-primary font-semibold text-lg px-4 py-2">
                Subscribe
              </button>
            </div>
            <div className="flex">
              <img src={whatsappFooter} alt="whatsappFooter" className="mr-6" />
              <img src={facebook} alt="facebook" className="mr-6" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <hr className="bg-ash w-full mt-20" />
      <p className="text-ash text-sm font-bold text-center pt-4 pb-10">
        &copy; <span>2021 Uplandshunt. All Right Reserved</span>
      </p>
    </div>
  );
};

export { Footer };
