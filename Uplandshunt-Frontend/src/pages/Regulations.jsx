import { LegalLayout } from "../Layout/LegalLayout";
import prop2 from "../assets/prop1.png";
import BlogCard from "../templates/BlogCard";
const Regulations = () => {
  return (
    <div>
      <LegalLayout text="New regulations on building a flat">
        <BlogCard photo={prop2} />
        <BlogCard photo={prop2} />
        <BlogCard photo={prop2} />
      </LegalLayout>
    </div>
  );
};

export { Regulations };
