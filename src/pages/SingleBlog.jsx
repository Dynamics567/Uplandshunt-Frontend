import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { axiosInstance } from "../Auth/Axios";
import blogOne from "../assets/blogTwo.svg";
import { SingleLegalLayout } from "../Layout";
import SingleLegalCard from "../templates/SingleLegalCard";
import DashboardLoader from "../templates/DashboardLoader";

const SingleBlog = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({});

  const getSingleBlog = () => {
    axiosInstance.get(`/blogs/${id}`).then((response) => {
      const results = response.data.data;
      setBlog(results);
    });
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <SingleLegalLayout text={blog.title} author="By Chidi">
          <div>
            <img src={blog.image} alt="property" className="my-4" />
            <p className="font-normal text-2xl mb-4 text-lightBlack">
              {blog.content}
            </p>
          </div>
        </SingleLegalLayout>
      )}
    </div>
  );
};

export { SingleBlog };
