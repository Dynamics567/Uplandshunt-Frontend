import { AuthLayout } from "../Layout";
import Intro from "../templates/Intro";
import { Input } from "../atoms";

const PasswordRecovery = () => {
  return (
    <div className="h-full">
      <AuthLayout>
        <Intro
          title="Password Recovery"
          subtitle="Provide your registered email address to recover your password"
        />
        <form className="mt-12 m-auto w-8/12">
          <label htmlFor="Email Address" className="font-bold text-sm pb-4">
            Email Address
          </label>
          <Input type="email" placeholder="example@example.com" />
          <div className="my-8 flex w-full justify-between items-center text-center">
            <button className="rounded-md p-4 text-white bg-primary font-semibold w-full">
              Send Link To Email
            </button>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export { PasswordRecovery };
