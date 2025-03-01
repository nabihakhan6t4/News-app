import { useState, useEffect, useCallback } from "react";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const Science = ({ category, setProgress, apiKey }) => {
  const [result, setResult] = useState({ articles: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (val) =>
    val.charAt(0).toUpperCase() + val.slice(1);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Memoize fetchData to prevent unnecessary re-renders
  const fetchData = useCallback(async () => {
    setProgress(10);
    setLoading(true);
    setError(null);

    try {
      const url = `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
      const response = await fetch(url);
      setProgress(30);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProgress(70);

      setResult((prevResult) => ({
        articles: page === 1 ? data.articles : [...prevResult.articles, ...data.articles],
      }));

      setTotalResults(data.totalResults);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
      setProgress(100);
    }
  }, [category, page, pageSize, apiKey, setProgress]); // Add missing dependencies

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Now fetchData is stable, so no infinite loop

  document.title = `${capitalizeFirstLetter(category)} - NewsHub`;

  const adjustTextLength = (text, maxLength) => {
    if (!text) return "No description available.";
    const words = text.split(" ");
    return words.length > maxLength ? words.slice(0, maxLength).join(" ") + "..." : text;
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Latest {capitalizeFirstLetter(category)} News
      </h1>

      {loading && page === 1 && (
        <div className="flex justify-center items-center h-32">
          <Loader />
        </div>
      )}
      {error && <p className="text-center text-4xl text-red-500">{error}</p>}

      {result.articles.length > 0 ? (
        <InfiniteScroll
          dataLength={result.articles.length}
          next={fetchMoreData}
          hasMore={result.articles.length < totalResults}
          loader={<Loader />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {result.articles.map((article, index) => (
              <div
                key={index}
                className="max-w-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden p-6"
              >
                <div
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{
                    backgroundImage: `url(${
                      article.urlToImage?.startsWith("http")
                        ? article.urlToImage
                        : "https://via.placeholder.com/300"
                    })`,
                  }}
                ></div>
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    {adjustTextLength(article.title, 10)}
                  </h2>
                  <p className="text-gray-700 text-sm mb-4">
                    {adjustTextLength(article.description, 20)}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={
                        article.urlToImage?.startsWith("http")
                          ? article.urlToImage
                          : "https://via.placeholder.com/50"
                      }
                      alt="Author"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 font-semibold">
                        {article.author || "Unknown"}
                      </p>
                      <p className="text-gray-600">
                        {new Date(article.publishedAt).toDateString()}
                      </p>
                    </div>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        !loading &&
        !error && <h1 className="text-center text-gray-700">No news available</h1>
      )}
    </div>
  );
};

export default Science;
Science.propTypes = {
  category: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};
