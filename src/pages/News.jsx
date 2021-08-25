import { useState, useEffect } from "react";

import { LegalLayout } from "../Layout/LegalLayout";
import NewsCard from "../templates/NewsCard";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  const getAllNews = () => {
    setLoading(true);
    axiosInstance.get("/news").then((response) => {
      const results = response.data.data;
      console.log(results);
      setNews(results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <LegalLayout text="News about the buildings">
          {news.map((news) => {
            return <NewsCard news={news} />;
          })}
        </LegalLayout>
      )}
    </div>
  );
};

export { News };
