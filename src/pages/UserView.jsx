import { ListingsLayout } from "../Layout";
import { PropertyDetails } from "./PropertyDetails";

const UserView = () => {
  return (
    <div className="my-10">
      <ListingsLayout>
        <PropertyDetails showFooter={false} showHeader={false} />
      </ListingsLayout>
    </div>
  );
};

export { UserView };
