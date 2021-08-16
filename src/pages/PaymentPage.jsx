import { useState } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";

import { Button, Input } from "../atoms";
import { HeaderTwo } from "../molecules";
import { Footer } from "../organisms";

const PaymentPage = () => {
  const publicKey = "pk_test_4d137d9b7e87c8119a2d18bd8cc9e57dcbf8b807";
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <div>
      <HeaderTwo />
      <div className="m-auto w-8/12 mt-16">
        <p className="font-bold text-lg">Payment Method</p>
        <p className="font-normal text-sm my-4">Select any payment method</p>
        <form
          className="p-6 border border-lightAsh rounded-md"
          //   style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
        >
          <p className="font-bold text-base mb-6">Card Details</p>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* <Input label="CVV" /> */}
          </div>
        </form>
        <PaystackButton {...componentProps} />
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
