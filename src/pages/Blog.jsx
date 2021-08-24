import { useState, useEffect } from "react";

import { LegalLayout } from "../Layout/LegalLayout";
import BlogCard from "../templates/BlogCard";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = () => {
    setLoading(true);
    axiosInstance.get("/blogs").then((response) => {
      const results = response.data.data;
      console.log(results);
      setBlogs(results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <LegalLayout text="News about the buildings">
          {blogs.map((blogs) => {
            return <BlogCard blogs={blogs} />;
          })}
        </LegalLayout>
      )}
    </div>
  );
};

export { Blog };
