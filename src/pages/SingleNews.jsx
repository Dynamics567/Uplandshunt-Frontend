import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { axiosInstance } from "../Auth/Axios";
import { SingleLegalLayout } from "../Layout";
import DashboardLoader from "../templates/DashboardLoader";

const SingleNews = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({});

  const getSingleNews = () => {
    setLoading(true);
    axiosInstance.get(`/news/${id}`).then((response) => {
      const results = response.data.data;
      setNews(results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSingleNews();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <SingleLegalLayout text={news.title} author="By Chidi">
          <div>
            <img src={news.image} alt="property" className="my-4" />
            <p className="font-normal text-2xl mb-4 text-lightBlack">
              {news.content}
            </p>
          </div>
        </SingleLegalLayout>
      )}
    </div>
  );
};

export { SingleNews };
