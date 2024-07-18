// lib/news.js

import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async (country = "us") => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country,
      },
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
