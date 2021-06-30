import Intro from "../templates/Intro";
import { AuthLayout } from "../Layout";

const DashboardLogin = () => {
  return (
    <AuthLayout>
      <Intro title="Welcome Back" subtitle="Log in to access your dashboard " />
      <div className="mt-12 m-auto w-8/12">
        <div className="my-8 w-full text-center">
          <button className="rounded-md p-4 mb-10 text-white bg-primary font-semibold w-full">
            Individual
          </button>
          <button className="rounded-md p-4 text-white bg-primary font-semibold w-full">
            Administrator
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export { DashboardLogin };
