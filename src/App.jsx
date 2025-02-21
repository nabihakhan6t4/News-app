import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";

import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import Politics from "./pages/Politics";
import Login from "./pages/Login";
import Sports from "./pages/Sports";
import Home from './pages/Home'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
