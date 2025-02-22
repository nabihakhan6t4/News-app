import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";

import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";

import Login from "./pages/Login";
import Sports from "./pages/Sports";
import Home from "./pages/Home";
import Business from "./pages/Business";

import Health from "./pages/Health";
import Science from "./pages/Science";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science category="science" />} />
        <Route path="/sports" element={<Sports category="sports" />} />
        <Route path="/business" element={<Business category="business" />} />

        <Route path="/health" element={<Health category="health" />} />

        <Route
          path="/entertainment"
          element={<Entertainment category="entertainment" />}
        />
        <Route
          path="/technology"
          element={<Technology category="technology" />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
