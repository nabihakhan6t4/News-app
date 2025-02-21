

const Home = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-base-200">
         <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="hero  p-6 md:p-10 rounded-lg">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Trending News</h1>
            <p className="py-2 md:py-4 text-base md:text-lg">
              Stay updated with the latest breaking news from around the world.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-6 md:mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl p-4">
            <h3 className="font-bold text-lg">News Title 1</h3>
            <p>Short news description goes here...</p>
          </div>
          <div className="card bg-base-100 shadow-xl p-4">
            <h3 className="font-bold text-lg">News Title 2</h3>
            <p>Short news description goes here...</p>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-6 md:mt-10 bg-base-200 p-4 md:p-6 rounded-lg text-center">
        <h2 className="text-xl md:text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mb-4 text-sm md:text-base">
          Get the latest news delivered to your inbox!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full md:max-w-xs" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
