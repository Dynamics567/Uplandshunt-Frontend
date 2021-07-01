import { LegalLayout } from "../Layout/LegalLayout";
import prop2 from "../assets/prop3.svg";
import BlogCard from "../templates/BlogCard";

const Blog = () => {
  return (
    <div>
      <LegalLayout text="Blogs on building a house">
        <BlogCard photo={prop2} url="/legal/blogview" />
        <BlogCard photo={prop2} url="/legal/blogview" />
        <BlogCard photo={prop2} url="/legal/blogview" />
      </LegalLayout>
    </div>
  );
};

export { Blog };
