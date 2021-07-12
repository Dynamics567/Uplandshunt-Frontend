import { ListingsLayout } from "../Layout";
import document from "../assets/userDashboard/document.svg";

const Documents = () => {
  return (
    <div>
      <ListingsLayout>
        <div className="mt-8">
          <img src={document} alt="document" />
        </div>
      </ListingsLayout>
    </div>
  );
};

export { Documents };
