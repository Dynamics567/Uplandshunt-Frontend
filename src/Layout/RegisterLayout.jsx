import { Link } from "react-router-dom";

import { RegisterHeader } from "../molecules";
import { AuthLayout } from "./AuthLayout";
import Intro from "../templates/Intro";

const RegisterLayout = ({ children }) => {
  return (
    <>
      <AuthLayout>
        <Intro
          title="Register"
          subtitle="Provide your details in order to register your account"
        />
        <div className="m-auto mt-8">
          <RegisterHeader />
        </div>
        <section>{children}</section>
        <Link to="/login">
          <p className="text-center font-normal text-sm mb-20">
            Already have an account?
            <span className="text-primary font-bold">Sign In</span>
          </p>
        </Link>
      </AuthLayout>
    </>
  );
};

export { RegisterLayout };
