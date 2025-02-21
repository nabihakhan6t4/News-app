import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=e317ec98b04b453da8f2176af582914e"
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    
    fetchData(); // Fetch data on mount

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleReadMore = () => {
    window.open("https://www.bbc.com/news", "_blank");
  };

  return (
    <motion.div
      className="w-full px-4 sm:px-6 lg:px-8 bg-base-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <motion.div
          className="hero p-6 md:p-10 rounded-lg text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundImage: `url(${articles[currentIndex]?.urlToImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-white">
            <div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Trending News
              </motion.h1>
              <motion.p
                className="py-2 md:py-4 text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {articles[currentIndex]?.description?.replace(/<\/?p>/g, "")}
              </motion.p>

              <motion.button
                className="btn btn-primary mx-auto block"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0px 0px 10px #00ffcc",
                    "0px 0px 20px #ff00ff",
                    "0px 0px 10px #00ffcc",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={handleReadMore}
              >
                Read More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Auto-Sliding News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className={`card bg-base-100 shadow-xl p-4 ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-50 scale-90"
              }`}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.5,
                scale: index === currentIndex ? 1 : 0.9,
                rotate: 0,
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <h3 className="font-bold text-lg">{article.title}</h3>
              <p>{article.description}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={() => window.open(article.url, "_blank")}
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-6 md:mt-10 bg-base-200 p-4 md:p-6 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Get the latest news delivered to your inbox!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:max-w-xs"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileFocus={{ scale: 1.1 }}
            />
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0px 0px 10px #ff00ff",
                  "0px 0px 20px #00ffcc",
                  "0px 0px 10px #ff00ff",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
