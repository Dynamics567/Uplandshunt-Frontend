import blogOne from "../assets/blogOne.svg";
import { SingleLegalLayout } from "../Layout";
import SingleLegalCard from "../templates/SingleLegalCard";

const SingleNews = () => {
  return (
    <div>
      <SingleLegalLayout text="Building a house at low cost" author="By Chidi">
        <SingleLegalCard image={blogOne} />
      </SingleLegalLayout>
    </div>
  );
};

export { SingleNews };
