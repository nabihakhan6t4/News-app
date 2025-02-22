import { useState, useEffect } from "react";

const Entertainment = ({ category }) => {
  const [result, setResult] = useState({ articles: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=e317ec98b04b453da8f2176af582914e`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        setResult(result);
        setTotalResults(result.totalResults);
      } catch (error) {
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, page]); // ✅ Auto-fetch news jab category ya page change ho

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Latest {category} News
      </h1>

      {loading && <h2 className="text-center">Loading...</h2>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {result.articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
          {result.articles.map((article, index) => (
            <div key={index} className="card bg-base-100 w-80 shadow-xl">
              <figure className="px-6 pt-6">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/300"}
                  alt={article.title || "No Image Available"}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">
                  {article.title || "No Title Available"}
                </h2>
                <p className="text-sm">
                  {article.description || "No description available"}
                </p>
                <div className="card-actions">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary text-sm px-4 py-2">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <h1 className="text-center">No news available</h1>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className="btn btn-secondary mx-2"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span className="text-xl font-bold mx-4">Page {page}</span>
        <button
          className="btn btn-secondary mx-2"
          disabled={page * pageSize >= totalResults}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Entertainment;
