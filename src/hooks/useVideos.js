import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defautSearchTerms) => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    search(defautSearchTerms);
  }, [defautSearchTerms]);

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setvideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return [videos, search];
};

export default useVideos;
