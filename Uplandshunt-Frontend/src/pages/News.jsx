import { LegalLayout } from "../Layout/LegalLayout";
import prop2 from "../assets/prop4.svg";
import BlogCard from "../templates/BlogCard";

const News = () => {
  return (
    <div>
      <LegalLayout text="News about the buildings">
        <BlogCard photo={prop2} />
        <BlogCard photo={prop2} />
        <BlogCard photo={prop2} />
      </LegalLayout>
    </div>
  );
};

export { News };
