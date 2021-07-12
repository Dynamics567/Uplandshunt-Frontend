import blogOne from "../assets/blogTwo.svg";
import { SingleLegalLayout } from "../Layout";
import SingleLegalCard from "../templates/SingleLegalCard";

const SingleBlog = () => {
  return (
    <div>
      <SingleLegalLayout
        text="New regulation on building a flat"
        author="By Chidi"
      >
        <SingleLegalCard image={blogOne} />
      </SingleLegalLayout>
    </div>
  );
};

export { SingleBlog };
