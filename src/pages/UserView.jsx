import { ListingsLayout } from "../Layout";
import { PropertyDetails } from "./PropertyDetails";
import interest from "../assets/interest.png";

const UserView = () => {
  return (
    <div className="my-10">
      <ListingsLayout>
        <PropertyDetails
          showFooter={false}
          showHeader={false}
          showBids={false}
        />
        <div className="mt-12 flex justify-center items-center">
          <img src={interest} alt="interest" className="w-1/2" />
        </div>
      </ListingsLayout>
    </div>
  );
};

export { UserView };
