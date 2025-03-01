import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Header";
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import Login from "./pages/Login";
import Sports from "./pages/Sports";
import Home from "./pages/Home";
import Business from "./pages/Business";
import LoadingBar from "react-top-loading-bar";
import Health from "./pages/Health";
import Science from "./pages/Science";


function App() {
  const [progress, setProgress] = useState(10);
  let apiKey = import.meta.env.VITE_NEWS_API;



  return (
    <>
      <Navbar />
      <LoadingBar color="#f11946" height={4} progress={progress} />
      <Routes>
        <Route path="/" element={<Home apiKey={apiKey}  setProgress={setProgress} />} />
        <Route
          path="/science"
          element={<Science setProgress={setProgress}   apiKey={apiKey}  category="science" />}
        />
        <Route
          path="/sports"
          element={<Sports setProgress={setProgress}   apiKey={apiKey}category="sports" />}
        />
        <Route
          path="/business"
          element={<Business setProgress={setProgress}   apiKey={apiKey}category="business" />}
        />
        <Route
          path="/health"
          element={<Health setProgress={setProgress}   apiKey={apiKey}category="health" />}
        />
        <Route
          path="/entertainment"
          element={
            <Entertainment setProgress={setProgress}   apiKey={apiKey}category="entertainment" />
          }
        />
        <Route
          path="/technology"
          element={
            <Technology setProgress={setProgress}   apiKey={apiKey}category="technology" />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
