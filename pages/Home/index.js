// pages/index.js

import { useState, useEffect } from "react";
import { fetchNews } from "@/lib/news";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews(country);
      setArticles(news);
    };

    getNews();
  }, [country]);

  return (
    <div className="bg-gray-200 w-full p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Top Headlines
      </h1>
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-md font-semibold text-gray-700"
        >
          Select Country:
        </label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 block w-1/2 pl-3 pr-10 py-2 text-gray-600 border-gray-300 focus:outline-none sm:text-sm rounded-md"
        >
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
          <option value="in">India</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-800">
                {article.title}
              </h2>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
