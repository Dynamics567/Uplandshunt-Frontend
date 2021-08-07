import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../atoms";
import { HeaderTwo } from "../molecules";
import { Footer } from "../organisms";

const PaymentPage = () => {
  return (
    <div>
      <HeaderTwo />
      <div className="m-auto w-8/12 mt-16">
        <p className="font-bold text-lg">Payment Method</p>
        <p className="font-normal text-sm my-4">Select any payment method</p>
        <section
          className="p-6 border border-lightAsh rounded-md"
          //   style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
        >
          <p className="font-bold text-base mb-6">Card Details</p>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Card Holder" />
            <Input label="Card Number" />
            <Input label="Expiry Date" />
            <Input label="CVV" />
          </div>
        </section>
        <div className="my-8 border border-lightAsh p-4 rounded-md">
          <input
            type="checkbox"
            value=""
            className="mr-2 border-none outline"
          />
          <label htmlFor="Terms" className="text-sm font-normal">
            PayStack
          </label>
        </div>
        <div className="flex w-full justify-center items-center text-center mb-10">
          <Link to="/paymentSuccess" className="w-1/2">
            <Button buttonText="Submit" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { PaymentPage };
