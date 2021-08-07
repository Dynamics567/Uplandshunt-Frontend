import { Link } from "react-router-dom";

import { Button } from "../atoms";
import { HeaderTwo } from "../molecules";
import payment from "../assets/payment.png";

const PaymentSuccessful = () => {
  return (
    <div>
      <HeaderTwo />
      <section className="m-auto w-8/12 mt-16 border border-lightAsh rounded-md p-6 flex flex-col justify-between items-center">
        <img src={payment} alt="payment" className="w-8 my-4" />
        <p className="font-bold text-base" style={{ color: "#1EC74D" }}>
          Payment Sucessful
        </p>
        <p className="font-normal text-base text-center my-4">
          Thanks ! Your payment has been successful. You can view payment
          history by logging in or go back home to continue buying properties.
        </p>
      </section>
      <div className="flex w-full justify-center items-center text-center mb-10">
        <Link to="/" className="w-1/6">
          <Button buttonText="Back To Home" />
        </Link>
      </div>
    </div>
  );
};

export { PaymentSuccessful };
