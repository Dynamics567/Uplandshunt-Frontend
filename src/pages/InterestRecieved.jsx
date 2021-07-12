import { ListingsLayout } from "../Layout";
import interest from "../assets/userDashboard/interest.svg";

const InterestRecieved = () => {
  return (
    <div>
      <ListingsLayout>
        <div className="mt-10">
          <img src={interest} alt="interest" />
        </div>
      </ListingsLayout>
    </div>
  );
};

export { InterestRecieved };
