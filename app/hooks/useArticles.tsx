import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { IArticle } from "@/types";

export const useArticles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getArticles() {
      try {
        const articles = await fetchData(
          `${process.env.API_ENDPOINT}/articles`,
          "GET"
        );
        articles && setArticles(articles);
      } catch (error) {
        console.warn(error);
      }
      setLoading(false);
    }

    getArticles();
  }, []);

  return { articles, loading, setArticles };
};
