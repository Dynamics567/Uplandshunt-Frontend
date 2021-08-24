import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  return (
    <Link
      to={`/legal/blogview/${blogs.id}`}
      className="cursor-pointer"
      key={blogs.id}
    >
      <div
        className="grid grid-cols-3 bg-white rounded-sm shadow-md mb-10 p-6"
        style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
      >
        <div className="flex justify-center col-start-1 col-end-1">
          <img src={blogs.image} alt="prop1" />
        </div>
        <div className="col-start-2 col-end-4">
          <p className="font-semibold text-2xl text-center">{blogs.title}</p>
          <div className="font-normal text-base py-6">
            <p>{blogs.content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
